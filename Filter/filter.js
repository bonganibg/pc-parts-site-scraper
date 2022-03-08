const axios = require('axios');
const category = require('./filters/category')
const store = require('./filters/store')
const manufacturer = require('./filters/manufacturer')

const graphics = require('./category-options/graphics');
const cooler = require('./category-options/cooler');
const hdd = require('./category-options/hdd');
const memory = require('./category-options/memory');
const motherboard = require('./category-options/motherboard');
const ssd = require('./category-options/ssd');
const { getHardDrive } = require('./category-options/hdd');


const staging = 'http://localhost:3000/api/parts'
const mainDb = 'http://localhost:8080/api/prods'
const production = 'https://pc-parts-prices-api.herokuapp.com/api/prods';
processProdCount = 0;
writtenToDb = 0;

async function loadStagingProducts()
{
    
    let products = null;
    let page = 1;    
    let done = false;
    let productCount = 0;
        
    const params = {
        page: page,
        size: 4200

    }

    // While all of the information has not been retrieved
    // while (!done)
    // {
        // get the information from the database
        await axios({
            method: 'get',
            url: staging,          
            headers: {'Content-Type': 'multipart/form-data'},
        })
        .then(async (response) =>{                        
            // check if there are products available            
            if (response.data.products.length > 0)
            {
                // write the products from each page into the checking variable
                products = response.data.products;            
                
                products.forEach(prod => {
                    // checkProduct(prod);     
                    writeToDatabase(prod);              
                    productCount++;
                });
                
                // Go to the next page
                // page++;
            }
            else
                done = true
        })
        .catch((error) =>{
            console.log("done")
            done = true;
        });                
        // params.page = page;
    // }    

    console.log(`${writtenToDb} written to the database`)
    console.log(processProdCount)
    console.log(`There are ${productCount} products`);
}


async function writeToDatabase(prod)
{    
    let date = new Date();
    let currentDate = date.getDate() + '-' + date.getMonth() + '-'+ date.getFullYear();
    product = {
        id: generateProductID(prod.Name.toString(), prod.Site.toString()),
        name: prod.Name.toString(),
        categoryId: category.getcategory(prod.Category.toString().toLowerCase()),
        currentPrice:  randToNumber(prod.Price),
        manufacturerId: manufacturer.getManufacturer(prod.Name.toString()),
        storeId: store.getStoreID(prod.Site.toString().toLowerCase()),
        imageUri: prod.Image.toString(),
        priceHistory: {
            date: currentDate,
            price: randToNumber(prod.Price)
        },
        categorySpecific: findCategorySpecific(prod)
    }

    await saveProduct(product);
}


function findCategorySpecific(prod)
{
    switch(prod.Category.toString().toLowerCase())
    {
        case "graphics card": graphics.loadProduct(prod.Name.toString()); 
                            return graphics.graphicsCard();        
        // case "processors": ;        
        case "memory": return memory.getMemory(prod.Name.toString());        
        case "solid state drive": return getHardDrive(prod.Name.toString());        
        case "motherboard": return motherboard.getMotherboard(prod.Name.toString());        
        case "cpu cooler": return cooler.getCoolerInfo(prod.Name.toString());        
        case "hard drive": return hdd.getHardDrive(prod.Name.toString());        
        // case "case": ;        
        // case "power supply": ;        
        // case "monitor": ;        
        // case "case fans": ;        
        default: return {};
    }    
}


async function saveProduct(product)
{
    await axios({
        method: 'post',
        url: production,
        data: product
    })
    .then((repsonse) =>{
        writtenToDb++;        
    })
    .catch((error) => {        
        
    });
}



// Get the RAND AMOUNT
// Turn a string with the rand symbol or any other string to an integer
function randToNumber(price = String)
{
    // Try using regex to remove the characters
    
    let formattedPrice = price.replace(/[^\d.]/g, '');
    return parseInt(formattedPrice);
}

// generates an ID based on the store and the product name
function generateProductID(productName = String,storeName = String)
{
    // join the strings 
    storeName = storeName.toString().toLowerCase();
    productName = productName.toString().toLowerCase();
    let uuid = productName + storeName;

    return uuid.toString().replaceAll(' ','');
    //return await hasText(uuid, hashConfig);
}


module.exports = {
    runFilter: async function() {
        await loadStagingProducts();        
    }
}