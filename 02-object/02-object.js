//soal 1
const person = {
    name: "Nazhwa Ameera",
    age: 100,
    favDrinks: [
        "coffee",
        "tap water",
        "tea"
    ],
    greeting: function(name) {
        console.log(`Hello, ${name}`)
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));

//soal 2
function getObjectValue(obj, str) {
    let value = str.split(".")
    if (obj[value[0]][value[1]][value[2]] == undefined) {
        return null
    } else {
        return obj[value[0]][value[1]][value[2]]
    }
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
            origin: "lampung",
            roastProfile: "medium to dark",
            ratio: 1
        },
        milk: {
            brand: "susu murni",
            isVegan: false,
            ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)

//soal 3
const items = [{
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    let reducer = function(sum, val) {
        let sum_btc = val.btc.sell - val.btc.buy;
        let sum_eth = val.eth.sell - val.eth.buy;
        let sum_doge = val.doge.sell - val.doge.buy;

        return { btc: sum.btc + sum_btc, eth: sum.eth + sum_eth, doge: sum.doge + sum_doge }
    }

    return items.reduce(reducer, { btc: 0, eth: 0, doge: 0 })
}

console.log(calculateIncome(items))