function findCategory(category = string)
{

    categoryId = "..."
    categories.forEach(cat => {
       
        if (cat.category == category)
        {
            categoryId = cat.id;
        }

    });

    return categoryId;
    
}

module.exports = {
    getcategory: function (category = String){
        category = category.toString().toLowerCase();
        return findCategory(category);
    }
}





categories = [
    {"category": "graphics card", "id": "cate_96e6fad1-792a-43f9-ae65-fbb8c8731cb6"},
    {"category": "processors", "id": "cate_d7f7fbd6-a812-45cf-b19e-c28396ba799c"},
    {"category": "memory", "id": "cate_532a407f-53a1-45da-8f48-0cd5b8d82ed9"},
    {"category": "solid state drive", "id": "cate_857412a6-6ad5-4238-9505-5db8d320066d"},
    {"category": "motherboard", "id": "cate_f4825934-e122-4ec3-aa10-78d7dd7ddce6"},
    {"category": "cpu cooler", "id": "cate_8c5d001f-81d6-4a18-a97a-f36df4738853"},
    {"category":  "hard drive", "id": "cate_2e5e17e6-25d8-4471-bf0f-f03e4e055645"},
    {"category": "case", "id": "cate_eb82602f-7802-4193-adc9-bc9d29037523"},
    {"category": "power supply", "id": "cate_6f322469-0d50-4400-8bc5-82f4eb9bd95c"},
    {"category": "monitor", "id": "cate_cf76b97b-bb9f-4a88-9b82-3238cbc50258"},
    {"category": "case fans", "id": "cate_e963e152-9ab6-4011-9475-1708a460715a"}
  ]
  