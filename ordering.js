let orderlist = [
    {
        orderName: "Vegetable Salad",
        orderId: 1,
        orderCategory: "Fitness"
    },
    {
        orderName: "Macaroni Salad",
        orderId: 2,
        orderCategory: "Dessert"
    },
    {
        orderName: "Banana Cake",
        orderId: 3,
        orderCategory: "Dessert"
    },
    {
        orderName: "Halo-Halo",
        orderId: 4,
        orderCategory: "Dessert"
    },
];

console.log(orderlist);

console.log({orderlist});

console.log({...orderlist});


console.log((orderlist)=>{
    let findSpec = orderlist.find("Macaroni");
})