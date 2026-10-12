function sumDeclaration(a, b) {
    return a + b;
}

function multiplyDeclaration(a, b) {
    return a * b;
}

function isEvenDeclaration(num) {
    return num % 2 === 0;
}

const sumExpression = function(a, b) {
    return a + b;
};

const multiplyExpression = function(a, b) {
    return a * b;
};

const isEvenExpression = function(num) {
    return num % 2 === 0;
};

const sumArrow = (a, b) => a + b;
const multiplyArrow = (a, b) => a * b;
const isEvenArrow = num => num % 2 === 0;

console.log(sumDeclaration(2, 3));
console.log(multiplyExpression(2, 3));
console.log(isEvenArrow(4));

const user = {
    name: "Аня",
    greet: function() {
        console.log(`Привет, я ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Привет, я ${this.name}`);
    }
};

user.greet();
user.greetArrow();
// greet получает this из объекта, а стрелочная функция не имеет своего this.

const person = {
    name: "Иван",
    showName: function() {
        console.log(this.name);
    }
};

setTimeout(() => person.showName(), 1000);

const product = {
    name: "Телефон",
    price: 30000,
    quantity: 2,
    getTotalPrice: function() {
        return this.price * this.quantity;
    }
};

console.log(product.getTotalPrice());

const student = {
    name: "Анна",
    grades: {
        math: 5,
        physics: 4,
        informatics: 5
    },
    getAverageGrade: function() {
        return (this.grades.math + this.grades.physics + this.grades.informatics) / 3;
    }
};

const { name, grades } = student;
console.log(name);
console.log(grades);
console.log(student.getAverageGrade());

function mergeObjects(obj1, obj2) {
    const result = {};

    for (let key in obj1) {
        result[key] = obj1[key];
    }

    for (let key in obj2) {
        result[key] = obj2[key];
    }

    return result;
}

console.log(mergeObjects({ name: "Анна", age: 20 }, { age: 21, city: "Москва" }));

const products = [
    { name: "Телефон", price: 50000, category: "electronics" },
    { name: "Ноутбук", price: 80000, category: "electronics" },
    { name: "Наушники", price: 5000, category: "electronics" },
    { name: "Клавиатура", price: 3500, category: "electronics" },
    { name: "Мышь", price: 2000, category: "electronics" },
    { name: "Хлеб", price: 80, category: "food" },
    { name: "Молоко", price: 100, category: "food" },
    { name: "Сыр", price: 700, category: "food" },
    { name: "Кофе", price: 900, category: "food" },
    { name: "Шоколад", price: 150, category: "food" },
    { name: "Куртка", price: 7000, category: "clothes" },
    { name: "Джинсы", price: 4000, category: "clothes" },
    { name: "Футболка", price: 1200, category: "clothes" },
    { name: "Кроссовки", price: 6000, category: "clothes" },
    { name: "Шапка", price: 900, category: "clothes" }
];

const expensiveNames = products
    .filter(product => product.price > 1000)
    .map(product => product.name);

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

const categoryCount = products.reduce((result, product) => {
    if (result[product.category]) {
        result[product.category]++;
    } else {
        result[product.category] = 1;
    }
    return result;
}, {});

const sortedProducts = products.sort((a, b) => a.price - b.price);

const groupedProducts = sortedProducts.reduce((result, product) => {
    if (result[product.category]) {
        result[product.category].push(product);
    } else {
        result[product.category] = [product];
    }
    return result;
}, {});

console.log(expensiveNames);
console.log(totalPrice);
console.log(categoryCount);
console.log(sortedProducts);
console.log(groupedProducts);

let catalog = [
    { id: 1, name: "The Witcher 3", genre: "RPG", price: 1500, rating: 9.5 },
    { id: 2, name: "Minecraft", genre: "Sandbox", price: 1200, rating: 9.0 },
    { id: 3, name: "FIFA 24", genre: "Sport", price: 3000, rating: 7.5 },
    { id: 4, name: "Cyberpunk 2077", genre: "RPG", price: 2500, rating: 8.5 },
    { id: 5, name: "GTA V", genre: "Action", price: 1800, rating: 9.2 },
    { id: 6, name: "Stardew Valley", genre: "Simulator", price: 700, rating: 9.1 },
    { id: 7, name: "Hades", genre: "Roguelike", price: 900, rating: 8.9 },
    { id: 8, name: "Portal 2", genre: "Puzzle", price: 600, rating: 9.4 }
];

function addItem(item) {
    catalog.push(item);
}

function removeItem(id) {
    catalog = catalog.filter(item => item.id !== id);
}

function updateItem(id, changes) {
    const item = findItem(id);

    if (item) {
        for (let key in changes) {
            item[key] = changes[key];
        }
    }
}

function findItem(id) {
    return catalog.find(item => item.id === id);
}

function findByField(field, value) {
    return catalog.filter(item => item[field] === value);
}

function getStats() {
    const catalogPrice = catalog.reduce((sum, item) => sum + item.price, 0);
    const catalogRating = catalog.reduce((sum, item) => sum + item.rating, 0);

    return {
        count: catalog.length,
        averagePrice: catalogPrice / catalog.length,
        averageRating: catalogRating / catalog.length
    };
}

function sortBy(field, order) {
    return catalog.sort((a, b) => {
        if (a[field] > b[field]) {
            return order === "asc" ? 1 : -1;
        }
        if (a[field] < b[field]) {
            return order === "asc" ? -1 : 1;
        }
        return 0;
    });
}

addItem({ id: 9, name: "Doom", genre: "Action", price: 1100, rating: 8.7 });
removeItem(3);
updateItem(2, { price: 1300 });
console.log(findItem(4));
console.log(findByField("genre", "RPG"));
console.log(getStats());
console.log(sortBy("price", "asc"));

