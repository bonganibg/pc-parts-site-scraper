motherboardInfo = {
    Chipmaker: ""
}

product = "";

function findChipmaker(){

    chipmakers.forEach(chip => {
        chip.keywords.forEach(keyword => {
            if (product.toString().toLowerCase().includes(keyword))
            {
                motherboardInfo.Chipmaker = chip.chipmaker;
            }
        });
    });
}

function processInfo(prod = String)
{
    product = prod;
    motherboardInfo = {
        Chipmaker: ""
    }
    
    findChipmaker();
}


module.exports = {
    getMotherboard: function (prod = String)
    {
        processInfo(prod);
        return motherboardInfo;
    }
}






chipmakers = [
    {
        "chipmaker": "INTEL",
        "keywords": [
            "intel",
            "lga",                        
            "Z590",
            "B660",
            "B560",
            "B460",
            "Z490",
            "H610",
            "H510",
            "H410",
            "H470",
            "Q470",
            "Z390",
            "Z370",
            "H370",
            "B365",
            "H310",
            "H110",
            "X299",
            "C236"       
        ]
    },
    {
        "chipmaker": "AMD",
        "keywords": [
            "X570",
            "B550",
            "A520",
            "X470",
            "X370",
            "B450",
            "A320",
            "TRX40"
        ]
    }
]

