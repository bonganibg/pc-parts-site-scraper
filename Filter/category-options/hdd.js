hardDriveInfo = {
    capacity: "0"
}

function findCapacity(product = String)
{   

    for (let i = 1; i < 20; i++)
    {
        if (product.toString().toLowerCase().includes(`${i}tb`))
        {
            hardDriveInfo.capacity = i + "TB";
        }
    }

}

function processInfo(product = String)
{
    hardDriveInfo = {
        capacity: "0"
    }

    findCapacity(product)
}

module.exports = {
    getHardDrive: function (prod = String)
    {
        processInfo();
        return hardDriveInfo;
    }
}

