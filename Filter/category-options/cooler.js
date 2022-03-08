coolerType = {
    "AIO": {
        "keywords": [
            "aio",
            "liquid",            
            "all-in-one",
            "all in one",
            "water"
        ],
        "radiator": [
            92,
            120,
            140,
            240,
            280,
            360,
            420
        ]
    }
}

coolerInfo = {
    "Type": "Air Cooler",
    "Radiator": ""
}


function getCoolerType(product = String)
{    
    coolerType.AIO.keywords.forEach(keyword => {
        if (product.toString().toLowerCase().includes(keyword))
        {            
            coolerInfo.Type = "AIO";
            coolerInfo.Radiator = getRadiatorSize(product);                      
        }
    });
}

function getRadiatorSize(product = String)
{
    radSize = 0;
    coolerType.AIO.radiator.forEach(size => {
        if (product.toString().toLowerCase().includes(`${size}`))
            radSize = size;
    });

    return radSize;
}

function processCooler(product = String)
{
    
    coolerInfo.Type = "Air Cooler";
    coolerInfo.Radiator = 0;
    getCoolerType(product); 
}
module.exports = {
    getCoolerInfo: function (product = String){
        processCooler(product);
        return coolerInfo;
    }
}