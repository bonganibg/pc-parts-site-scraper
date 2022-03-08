// const filter = require('./Filter/filter');
const scraper = require('./Scraper/scraper');
const log4js = require('log4js');
log4js.configure({
    appenders: { scraping: {type: "file", filename: "scrapelog.log"}},
    categories: {default: {appenders: ["scraping"], level: "error"} }
});

const logger = log4js.getLogger("scraping");


// Interval for data to be scraped and filtered
const updateInterval = 5;

(async () => {
    // Allows for data to be scraped on boot
    let lastUpdate = new Date().getHours() - updateInterval;

    
    //Only stop the loop when ctrl c is clicked
    while(1==1)
    {
        // Set time to be checked                
        let currentTime = new Date().getHours();

        //Check if the interval time has elapsed
        if ((currentTime-lastUpdate) >= 1)
        {
            // run the scraping and the filtering processes
            await updateInformation();
        }

        
    }
})();

async function updateInformation()
{

    
    try{
        await scraper.launchScraper();
    }
    catch(e){        
       logger.error("Scraper Failed");
    }

    try{
        await filter.runFilter();
    }
    catch(e){
        logger.error("Filter Failed");
    }
}