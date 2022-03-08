memoryInfo = {
    DDR: 4,
    Capacity: 0,
    Speed: 0
}

product = "";

function findInterface(){
    interfaces.forEach(inter => {
        if (product.toString().toLowerCase().includes(`ddr${inter}`))
        {
            memoryInfo.DDR = inter;
            return;
        }
    });
}

function findCapacity()
{
    capacities.forEach(capacity => {
        if (product.toString().toLowerCase().includes(`${capacity}gb`))
        {
            memoryInfo.Capacity = capacity;
        }
    });
}

function findSpeeds()
{
    speeds.forEach(speed => {
        if (product.toString().toLowerCase().includes(`${speed}`))
        {
            memoryInfo.Speed = speed;
        }
    });
}


function processInfo(prod = String)
{
    product = prod;

    findInterface();
    findCapacity();
    findSpeeds();
}

module.exports = {
    getMemory: function (product = String){
        processInfo(product);
        return memoryInfo;
    }
}


interfaces = [
    2,
    3,
    4,
    5
]

capacities = [
    1,
    2,
    4,
    8,
    16,
    32,
    64,
    128,
]

speeds = [
    2400,
    2600,
    2666,
    2800,
    2933,
    3000,
    3200,
    3300,
    3333,
    3400,
    3466,
    3600,
    3733,
    3866,
    4000,
    4133,
    4266,
    4400,
    4600,
    4800,
    5000,
    5133,
    5200,
    5333,
    5600,
    6000,
    2133,
    1333,
    1600,
    1866,
    800
]