function solve(stock, orders){
    const shop = {};
    for(let i = 0; i < stock.length; i += 2){
        const item = stock[i];
        const quantity = Number(stock[i + 1]);
        shop[item] = quantity;
    }
    for(let i = 0; i < orders.length; i += 2){
        const item = orders[i];
        const quantity = Number(orders[i + 1]);
        if(shop.hasOwnProperty(item)){
            shop[item] += quantity;
        }
        else{
            shop[item] = quantity;
        }
    }
    Object.entries(shop).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    })
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    );