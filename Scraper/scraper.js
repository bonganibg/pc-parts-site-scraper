const fs = require('fs');
const puppeteer = require('puppeteer');
const axios = require('axios');

async function RunScraper()
{
    await fs.readFile("sites.json", "UTF-8", async (err, data) =>
    {
    if (err) throw err;
    
    const storeData = JSON.parse(data);       
    
    storeData.forEach( async (store) => {

        const storeName = store.site;
        const urlPagesFormat = store.data.format;
        const scrapeThis = store.data.links;
        const productListContainer = store.data.container;
        const productListItem = store.data.item;
        const productInfo = {
            Name: store.data.name,
            Price: store.data.price,
            Image: store.data.image,            
        };

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
    
        //for each category page for the website
        for (const search of scrapeThis)
        {        
            
            // for each page in the websites category
            for(let i = 1; i <= search.pages; i++)
            {
                
                let url;
                
                // check if the page is one, if so dont add the page number to the url
                if (i == 1)
                    url = search.url;
                else
                    url = search.url + String(urlPagesFormat).replace("{}", i);                                          
                
                await page.goto(url);                
                                
    
                // search filters that can only appear after page number
                if (search.filter !== undefined)
                    url = url + search.filter;
                    
                
                await page.waitForSelector(productListContainer);
                const productList = await page.$$(productListItem);
    
                for (const item of productList)
                {            
    
                    let name;
                    let price;
                    let image;
                    try {
                        // get the product information from the page
                        name = item.$eval(productInfo.Name, prod => prod.textContent);
                        price = item.$eval(productInfo.Price, prod => prod.textContent);
                        image = item.$eval(productInfo.Image, prod => prod.getAttribute('src'));
                    } catch (error) {
                        name = "...";
                        price = "...";
                        image = "..."; // make a default image to put here
                        console.log("ERROR LOADING PRODUCT INFORMATION");
                        console.log(error);
                    }
    
                    // write the information into an object
                    const prodInfo = {
                        Name: (await name).toString().trim(),
                        Price: (await price).toString().trim(),
                        Image: (await image).toString().trim(),
                        Store: storeName,
                        Category: search.category
                    };               
                
    

                    console.log(prodInfo.Name);
                    //Write the data to the local database before for storage before processing
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/api/parts',
                        data: prodInfo
                    })
                    .then(() =>{
                        console.log(prodInfo.Name);                    
                    })
                    .catch((err) =>{
                        console.log("ERROR WRITTING TO API");
                        console.log(err);
                    });                
                }
            }
        }
        await browser.close();
    });


    });  
    
}

module.exports = {
    launchScraper: async function(){
        try{
            await RunScraper();
            return "Complete"
        } catch(error){
            return error;
        }
    }
}


