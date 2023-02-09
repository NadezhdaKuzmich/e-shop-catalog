const menu = document.querySelector('.categories');
const categories = menu.querySelectorAll('li');
const goodsList = document.getElementById('goods');
const description = document.getElementById('description');
const btnBuy = document.querySelector('.btn');
const modalBuy = document.querySelector('.modals-container');
const promo = document.querySelector('.promo-wrap');
let timer;
const goods = [
    {
        model: 'iPhone 14 Pro',
        price: '999$',
        priceRange: 'Від 999$',
        description: 'Поєднує в собі екран Ceramic Shield, міцніший за скло будь-якого смартфона, водонепроникність і нержавіючу сталь хірургічного класу.',
        photo: './images/iphone14pro.jpg',
        category: 'iphone',
        article: '1'
    },
    {
        model: 'iPad (10 покоління)',
        price: '449$',
        priceRange: 'Від 449$',
        description: "З новим дисплеєм Liquid Retina 10,9 дюйма на всю передню панель та у чотирьох розкішних кольорах iPad — це потужний інструмент, що дає змогу творити, працювати та залишатися на зв’язку.",
        photo: './images/ipad.jpg',
        category: 'ipad',
        article: '2'
    },
    {
        model: 'Apple Watch Ultra',
        price: '799$',
        priceRange: 'Від 799$',
        description: "Найбільший і найяскравіший дисплейю Always-On Retina має максимальну яскравість 2000 ніт і вдвічі яскравіший за будь-який інший Apple Watch.",
        photo: './images/watch-ultra.jpg',
        category: 'watch',
        article: '3'
    },
    {
        model: 'MacBook Pro 13-inch',
        price: '999$',
        priceRange: 'Від 999$',
        description: "Новий чіп M2 робить MacBook Pro потужнішим, ніж будь-коли. Той самий компактний дизайн забезпечує до 20 годин автономної роботи та активну систему охолодження для підтримки підвищеної продуктивності.",
        photo: './images/mbp.jpg',
        category: 'macbook',
        article: '4'
    },    
    {
        model: 'iPhone 14',
        price: '799$',
        priceRange: 'Від 799$',
        description: "Новий iPhone 14 зробив величезний прорив у фотографії при слабкому освітленні, отримав максимальний час автономної роботи і став ще надійнішим і швидшим. Вибирайте один з п'яти фантастичних кольорів і поспішайте досконало.",
        photo: './images/iphone14.jpg',
        category: 'iphone',
        article: '5'
    },    
    {
        model: 'IPad mini 6',
        price: '499$',
        priceRange: 'Від 499$',
        description: "iPad mini створений, щоб вражати кожною деталлю. Його екран простягається аж до країв нещодавно розробленого корпусу й тепер має вужчі рамки й елегантно закруглені кути.",
        photo: './images/ipad-mini.jpg',
        category: 'ipad',
        article: '6'
    },
    {
        model: 'Apple Watch SE',
        price: '249$',
        priceRange: 'Від 249$',
        description: "Потужні датчики для відстежування вашого здоров’я та фізичної форми. Швидший двоядерний процесор для додаткової продуктивності. Apple Watch SE наповнений багатими функціями, і тепер це краще, ніж будь-коли.",
        photo: './images/watch-se.jpg',
        category: 'watch',
        article: '7'
    },
    {
        model: 'MacBook Air M1',
        price: '999$',
        priceRange: 'Від 999$',
        description: "MacBook Air з M1 — це неймовірно портативний ноутбук — він спритний і швидкий, має тихий безвентиляторний дизайн і чудовий дисплей Retina. Завдяки тонкому профілю та заряду батареї, що працює цілий день, цей Air рухається зі швидкістю легкості.",
        photo: './images/mba2.jpg',
        category: 'macbook',
        article: '8'
    },
    {
        model: 'iPhone 13',
        price: '599$',
        priceRange: 'Від 599$',
        description: "Найдосконаліша система двох камер на iPhone. Режим «Кіноефект» робить із відео справжнє кіно. Супершвидкий чіп A15 Bionic. Невтомний акумулятор. Міцний корпус. І ще яскравіший дисплей Super Retina XDR.",
        photo: './images/iphone13.jpg',
        category: 'iphone',
        article: '9'
    },    
    {
        model: 'Pad Air',
        price: '599$',
        priceRange: 'Від 599$',
        description: "Насолоджуйтесь надшвидкими бездротовими мережами 5G, де б ви не були. Ви можете завантажувати файли, грати в ігри, транслювати фільми, підтримувати зв’язок з друзями та робити багато іншого.",
        photo: './images/ipad-air.jpg',
        category: 'ipad',
        article: '10'
    },
    {
        model: 'Apple Watch Series 8',
        price: '399$',
        priceRange: 'Від 399$',
        description: "Зрозумійте свій цикл як ніколи раніше. Apple Watch Series 8 має новий інноваційний датчик, який відстежує вашу температуру під час сну, тож ви можете бачити зміни з часом.",
        photo: './images/watch-s8.jpg',
        category: 'watch',
        article: '11'
    },
    {
        model: 'MacBook Air M2',
        price: '1199$',
        priceRange: 'Від 1199$',
        description: "Чіп M2 починає наступне покоління кремнію із ще більшою швидкістю та енергоефективністю M1. Тож ви зможете виконувати більше завдань швидше за допомогою потужнішого 8-ядерного процесора.",
        photo: './images/mac3.jpg',
        category: 'macbook',
        article: '12'
    },
    {
        model: 'iPhone 12',
        price: '599$',
        priceRange: 'Від 599$',
        description: "Новий iPhone 12 став на 11% тонше і на 16% легше, зберігши за собою лідерські якості. Передня панель iPhone встановлена на одному рівні з корпусом і має унікальну захист Ceramic Shield, завдяки чому ризик пошкодити екран при падінні зменшується в 4 рази.",
        photo: './images/iphone12.jpg',
        category: 'iphone',
        article: '13'
    }  
]

function createGoodCard(good) {
    let goodCard = document.createElement("div");
    goodCard.classList.add("good-card");
    goodCard.setAttribute('category', good.category);
    goodCard.setAttribute('article', good.article)
    goodCard.insertAdjacentHTML("beforeend", `<p>${good.model}</p>`);
    goodCard.insertAdjacentHTML("beforeend", `<div class="good-visual"><img src="${good.photo}" alt="image"></div>`);
    goodCard.insertAdjacentHTML("beforeend", `<span>${good.priceRange}</span>`);
    return goodCard;
}

goods.forEach(good => {
    let card = createGoodCard(good);
    goodsList.append(card);
});

const cards = goodsList.querySelectorAll('.good-card');
function createDescription(card) {
    goods.forEach(good => {
        if(card.getAttribute('article') == good.article) {
            description.setAttribute('article', good.article);
            description.querySelector('img').src = good.photo;
            description.querySelector('h2').innerText = good.model;
            description.querySelector('span').innerText = good.price;
            description.querySelector('p').innerText = good.description;
            description.classList.remove('hidden');
        }
    })
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        createDescription(card);
    })
})

function filterGoods(category) {
    cards.forEach(card => {
        card.classList.add('hidden');
        promo.classList.add('hidden')
        goodsList.closest('.goods-section').classList.remove('hidden');
        if(category.getAttribute('category') == card.getAttribute('category')){
            card.classList.remove('hidden');
        }
    })
}

categories.forEach((category) => {
    category.addEventListener('click', () => {
        description.classList.add('hidden');
        filterGoods(category);
    })
})

function chooseCategory(event) {
    categories.forEach(category => {
        category.classList.remove('active');
        if(category == event.target) {
            category.classList.add('active');
        }
    })
};

menu.addEventListener('click', chooseCategory);

function returnStyles(event) {
    goodsList.closest('.goods-section').classList.add('hidden');
    description.classList.add('hidden');
    chooseCategory(event);
    promo.classList.remove('hidden')
}

function createMessage(description) {
    let modal = document.createElement("div");
    modal.classList.add("modal-buy");
    let message = document.createElement('div');
    message.classList.add("modal-content");
    goods.forEach(good => {
        if(description.getAttribute('article') == good.article) {
            message.insertAdjacentHTML("beforeend", `<h3>Дякуємo за покупку <br>${good.model}!</h3>`);
        }
    })
    message.insertAdjacentHTML("beforeend", `<p>Очікуйте відправлення!</p>`);
    modal.append(message);
    return modal;
}

function hideMessage() {
    modalBuy.firstElementChild.remove();
}

btnBuy.addEventListener('click', (event) => {
    let msg = createMessage(description);
    modalBuy.append(msg);
    returnStyles(event);
    setTimeout(hideMessage, 3500);
}) 