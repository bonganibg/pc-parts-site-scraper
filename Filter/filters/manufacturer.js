const fs = require('fs');
const fspromise = fs.promises;
done = false;

function findManufacturer(product = String)
{      

    manufacturer = "...";
    manus.forEach(item => {        
        if (product.toLowerCase().substring(0,18).includes(item.name.toLowerCase()))
        {                   
            manufacturer = item.id.toString();              
            return manufacturer;                     
        }        
    });          
    return manufacturer;

}

module.exports = {
    getManufacturer: function (prod = String) {
        return findManufacturer(prod);
    }    
}



const manus = [
    {
        "_id": "61f2ab7bd5ef220a619deda3",
        "id": "manu_61f2a773d5ef220a619ded1a",
        "name": "MSI",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deda2",
        "id": "manu_61f2a773d5ef235be19ded34",
        "name": "AMD",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedb9",
        "id": "manu_61f2a773d5ef220a619ded30",
        "name": "Corsair",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedbb",
        "id": "manu_61f2a773d5ef220a619ded32",
        "name": "Kingston",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedbd",
        "id": "manu_61f2a773d5ef220a619ded34",
        "name": "Adata",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedbf",
        "id": "manu_61f2a773d5ef220a619ded36",
        "name": "KLEVV",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedc1",
        "id": "manu_61f2a773d5ef220a619ded38",
        "name": "G.Skill",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedc3",
        "id": "manu_61f2a773d5ef220a619ded3a",
        "name": "Crucial",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedc5",
        "id": "manu_61f2a773d5ef220a619ded3c",
        "name": "Ballistix",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedc7",
        "id": "manu_61f2a773d5ef220a619ded3e",
        "name": "TeamGroup",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedc9",
        "id": "manu_61f2a773d5ef220a619ded40",
        "name": "Avexir",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedcb",
        "id": "manu_61f2a773d5ef220a619ded42",
        "name": "Transcend",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedcd",
        "id": "manu_61f2a773d5ef220a619ded44",
        "name": "Micron",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedcf",
        "id": "manu_61f2a773d5ef220a619ded46",
        "name": "Patriot",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedd1",
        "id": "manu_61f2a773d5ef220a619ded48",
        "name": "EK",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedd3",
        "id": "manu_61f2a773d5ef220a619ded4a",
        "name": "NZXT",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedd5",
        "id": "manu_61f2a773d5ef220a619ded4c",
        "name": "Gamdias",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedd7",
        "id": "manu_61f2a773d5ef220a619ded4e",
        "name": "Antec",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedd9",
        "id": "manu_61f2a773d5ef220a619ded50",
        "name": "Cooler Master",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deddb",
        "id": "manu_61f2a773d5ef220a619ded52",
        "name": "InWin",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deddd",
        "id": "manu_61f2a773d5ef220a619ded54",
        "name": "Raidmax",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deddf",
        "id": "manu_61f2a773d5ef220a619ded56",
        "name": "Bitfenix",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dede1",
        "id": "manu_61f2a773d5ef220a619ded58",
        "name": "Cougar",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dede3",
        "id": "manu_61f2a773d5ef220a619ded5a",
        "name": "DeepCool",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dede5",
        "id": "manu_61f2a773d5ef220a619ded5c",
        "name": "Raijintek",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dede7",
        "id": "manu_61f2a773d5ef220a619ded5e",
        "name": "Thermaltake",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dede9",
        "id": "manu_61f2a773d5ef220a619ded60",
        "name": "ZEROtherm",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedeb",
        "id": "manu_61f2a773d5ef220a619ded62",
        "name": "Lian Li",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deded",
        "id": "manu_61f2a773d5ef220a619ded64",
        "name": "Evetech",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedef",
        "id": "manu_61f2a773d5ef220a619ded66",
        "name": "CFI",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deda5",
        "id": "manu_61f2a773d5ef220a619ded1c",
        "name": "ASUS",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedf1",
        "id": "manu_61f2a773d5ef220a619ded68",
        "name": "FSP",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedf3",
        "id": "manu_61f2a773d5ef220a619ded6a",
        "name": "Huntkey",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedf5",
        "id": "manu_61f2a773d5ef220a619ded6c",
        "name": "PSI",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedf7",
        "id": "manu_61f2a773d5ef220a619ded6e",
        "name": "Redragon",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedf9",
        "id": "manu_61f2a773d5ef220a619ded70",
        "name": "SAMA",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedfb",
        "id": "manu_61f2a773d5ef220a619ded72",
        "name": "Zalman",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deda7",
        "id": "manu_61f2a773d5ef220a619ded1e",
        "name": "XFX",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedfd",
        "id": "manu_61f2a773d5ef220a619ded74",
        "name": "Western Digital",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619deda9",
        "id": "manu_61f2a773d5ef220a619ded20",
        "name": "Gigabyte",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedab",
        "id": "manu_61f2a773d5ef220a619ded22",
        "name": "Leadtek",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedad",
        "id": "manu_61f2a773d5ef220a619ded24",
        "name": "Sapphire",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedaf",
        "id": "manu_61f2a773d5ef220a619ded26",
        "name": "Gainward",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedb1",
        "id": "manu_61f2a773d5ef220a619ded28",
        "name": "Asrock",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedb3",
        "id": "manu_61f2a773d5ef220a619ded2a",
        "name": "PNY",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedb5",
        "id": "manu_61f2a773d5ef220a619ded2c",
        "name": "Palit",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedb7",
        "id": "manu_61f2a773d5ef220a619ded2e",
        "name": "PowerColor",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dedff",
        "id": "manu_61f2a773d5ef220a619ded76",
        "name": "Seagate",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee01",
        "id": "manu_61f2a773d5ef220a619ded78",
        "name": "Synology",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee03",
        "id": "manu_61f2a773d5ef220a619ded7a",
        "name": "Toshiba",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee05",
        "id": "manu_61f2a773d5ef220a619ded7c",
        "name": "acer",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee07",
        "id": "manu_61f2a773d5ef220a619ded7e",
        "name": "HP",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee09",
        "id": "manu_61f2a773d5ef220a619ded80",
        "name": "Hikvision",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee0b",
        "id": "manu_61f2a773d5ef220a619ded82",
        "name": "Samsung",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee0d",
        "id": "manu_61f2a773d5ef220a619ded84",
        "name": "SanDisk",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee0f",
        "id": "manu_61f2a773d5ef220a619ded86",
        "name": "Intel",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee11",
        "id": "manu_61f2a773d5ef220a619ded88",
        "name": "Netac",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee13",
        "id": "manu_61f2a773d5ef220a619ded8a",
        "name": "Alienware",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee15",
        "id": "manu_61f2a773d5ef220a619ded8c",
        "name": "AOC",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee17",
        "id": "manu_61f2a773d5ef220a619ded8e",
        "name": "LG",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee19",
        "id": "manu_61f2a773d5ef220a619ded90",
        "name": "Dell",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee1b",
        "id": "manu_61f2a773d5ef220a619ded92",
        "name": "ViewSonic",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee1d",
        "id": "manu_61f2a773d5ef220a619ded94",
        "name": "Phillips",
        "keywords": [],
        "__v": 0
    },
    {
        "_id": "61f2ab7bd5ef220a619dee1f",
        "id": "manu_61f2a773d5ef220a619ded96",
        "name": "Lenovo",
        "keywords": [],
        "__v": 0
    }
]