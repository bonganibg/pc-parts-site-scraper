
function findStore(query = String)
{
    storeID = "...";
    stores.forEach(site => {
        if (site.store == query)
        {
            storeID = site.id;            
        }
    });

    return storeID;
}


module.exports = {
    getStoreID : function (store = String){
        return findStore(store);
    }
}

stores = [
    {"store": "evetech", "id": "store_5fed049c-dfda-44f7-be5e-3f15a03b5cf5"},
    {"store": "techfox", "id": "ststore_420a69b0-1d61-44ac-8f6a-4c06c7b4adb4ore"},
    {"store": "titan-ice", "id": "store_f3aa218d-ef86-49bc-8ad2-242af83db6d8"},
    {"store": "dreamware tech", "id": "store_57e3ee66-9bae-4e96-9114-473f63a75798"},
    
]