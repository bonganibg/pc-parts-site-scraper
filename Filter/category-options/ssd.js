solidStateDrive = {
    capacity: "0",
    formFactor: "SATA"
}

ssdFormFactor = [
    {
        "FormFactor": "NVMe",
        "keywords": [
            "nvme",
            "m.2",
            "pcie"
        ] 
    },
    {
        "FormFactor": "SATA",
        "keywords": [
            "sata"
        ] 
    }
]

capacitiesGB = [
    100,
    120,
    125,
    128,
    240,
    250,
    256,
    400,
    480,
    500,
    512,
]

function findCapacity(product = String)
{   

    found = false;
    // Check the terabytes
    for (let i = 1; i < 50; i++)
    {
        if (product.toString().toLowerCase().includes(`${i}tb`))
        {
            solidStateDrive.capacity = i + "TB";
            found = true;
        }
    }

    // Check if it is in GB
    if (!found)
    {
        capacitiesGB.forEach(capacity => {
            if (product.toString().toLowerCase().includes(`${capacity}gb`))
            {
                solidStateDrive.capacity = i + "TB";
            }
        });
    }
}

function findFormFactor(product = String)
{
    ssdFormFactor.forEach(form => {

        form.keywords.forEach(keyword => {
            if (product.toString().toLowerCase().includes(keyword))
            {
                solidStateDrive.formFactor = form.FormFactor;
            }
        });

    });
}

function processInfo(product = String)
{
    hardDriveInfo = {
        capacity: "0",
        formFactor: "SATA"
    }

    findFormFactor(product)
    findCapacity(product)
}

module.exports = {
    getHardDrive: function (prod = String)
    {
        processInfo(prod);
        return solidStateDrive;
    }
}

