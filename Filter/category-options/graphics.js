productInfo = {
    series: "",
    chipmaker: "",
    memory: ""
}

product = ""

const dummyProducts = [
    "MSI GeForce RTX 3090 Gaming X TRIO 24GB",
    "ASUS TUF Gaming GeForce RTX 3070 Ti OC 8GB",
    "Gigabyte RTX 3070 Ti EAGLE 8GB GDDR6X Graphics Card",
    "AORUS GeForce RTX 3070 MASTER 8GB Graphics Card",
    "Leadtek WinFast RTX 3070 HURRICANE 8GB",
    "MSI Radeon RX 6700 XT MECH 2X OC 12GB GDDR6",
    "Gigabyte RTX 3060 EAGLE OC 12GB Graphics Card",
    "XFX Speedster SWFT 309 AMD Radeon RX 6700 XT 12GB Core",
    "MSI GeForce RTX 3060 VENTUS 2X 12GB OC LHR"
];

// List of the chip maker and keywords related to that chipmaker, and maker ID
const chipmakers = [
    {
        "id": "chip_efe7a688-f3f5-46f3-8842-5600df289d35",
        "name": "AMD",
        "keywords": [
            "radeon",
            "amd",
        ],
        "series": [
          "rx 6900",
          "rx 6800",
          "rx 6700",
          "rx 6600",
          "rx 5700",
          "vega 64",
          "rx 8200",
          "rx 6500",
          "rx 5500",
          "rx 590",
          "rx 580",
          "rx 570",
          "rx 560"
        ]
    },
    {
        "id": "chip_9727bce6-5c21-42e5-bc5a-bb1b7d542d90",
        "name": "Nvidia",
        "keywords": [
            "gtx",
            "geforce",
            "rtx",
        ],
        "series": [
          "gt 710",
          "gt 720",
          "gt 730",
          "gt 1030",
          "gtx 1050",
          "gtx 1060",
          "gtx 1070",
          "gtx 1080",
          "gtx 1650",
          "gtx 1660",
          "rtx 2060",
          "rtx 2070",
          "rtx 2080",
          "rtx 3050",
          "rtx 3060",
          "rtx 3070",
          "rtx 3080",
          "rtx 3090",
        ],
    }

];

const memory = [
    3,
    4,
    6,
    8,
    10,
    12,
    16,
    24,
    32
]


// Get the series of graphics cards that the product belongs to
function getSeries(chipper = int){
    chipmakers[chipper].series.forEach(variant => {
        if (product.toLowerCase().includes(variant))
        {
            productInfo.series = variant;
            return;
        }
    });
}

// Get the chipmaker for the GPu
function getChipMaker(){
    counter = 0;
    chipmakers.forEach(maker => {
        maker.keywords.forEach(key => {
            if (product.toLowerCase().includes(key))
            {
                productInfo.chipmaker = maker.name;
                getSeries(counter);
                return;
            }
        });
        counter++;
    });
}


function getMemorySize(){
    memory.forEach(mem  => {
        if (product.toLowerCase().includes(`${mem}gb`))
        {
            productInfo.memory = mem;
            return;
        }
    });
}


module.exports = {

    loadProduct: function(prod = String){
         product = prod;
         console.log(prod);
    },

    graphicsCard: function() {
        getMemorySize();
        getChipMaker();
        return productInfo;
    }
}



models = [
  "gt710",
  "gt720",
  "gt730",
  "gt1030",
  "gtx1050",
  "gtx1060",
  "gtx1070",
  "gtx1080",
  "gtx1650",
  "gtx1660",
  "rtx2060",
  "rtx2070",
  "rtx2080",
  "rtx3050",
  "rtx3060",
  "rtx3070",
  "rtx3080",
  "rtx3090",
  "rx6900",
  "rx6800",
  "rx6700",
  "rx6600",
  "rx5700",
  "vega64",
  "rx8200",
  "rx6500",
  "rx5500",
  "rx590",
  "rx580",
  "rx570",
  "rx560"
]
