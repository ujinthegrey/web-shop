const cataloge = [
    {
        id: 1,
        imgSquare: 'img/items/square/01.jpg',
        imgPortrait: 'img/items/portrait/01.jpg',
        name: 'Увлажнитель воздуха STARWIND SHC1322, 3л, белый',
        price: 1650,
        number: 1
    },
    {
        id: 2,
        imgSquare: 'img/items/square/02.jpg',
        imgPortrait: 'img/items/portrait/02.jpg',
        name: 'Триммер PHILIPS HC3521/15 серебристый/черныйй',
        price: 2290,
        number: 1
    },
    {
        id: 3,
        imgSquare: 'img/items/square/03.jpg',
        imgPortrait: 'img/items/portrait/03.jpg',
        name: 'Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95", розовый',
        price: 2390,
        number: 1
    },
    {
        id: 4,
        imgSquare: 'img/items/square/04.jpg',
        imgPortrait: 'img/items/portrait/04.jpg',
        name: 'Мышь A4TECH Bloody V3, игровая, оптическая, проводная, USB, черный',
        price: 960,
        number: 1
    },
    {
        id: 5,
        imgSquare: 'img/items/square/05.jpg',
        imgPortrait: 'img/items/portrait/05.jpg',
        name: 'Фитнес-трекер HONOR Band 5 CRS-B19S, 0.95", черный',
        price: 2390 ,
        number: 1
    },
    {
        id: 6,
        imgSquare: 'img/items/square/06.jpg',
        imgPortrait: 'img/items/portrait/06.jpg',
        name: 'Пылесос SINBO SVC 3497, 2500Вт, синий/серый',
        price: 5670,
        number: 1
    },
    {
        id: 7,
        imgSquare: 'img/items/square/07.jpg',
        imgPortrait: 'img/items/portrait/07.jpg',
        name: 'Планшет DIGMA Optima 7 Z800 Android 10.0 серебристый',
        price: 9490,
        number: 1
    },
    {
        id: 8,
        imgSquare: 'img/items/square/08.jpg',
        imgPortrait: 'img/items/portrait/08.jpg',
        name: 'Монитор игровой ACER Nitro RG241YPbiipx 23.8" черный',
        price: 16800,
        number: 1
    },
    {
        id: 9,
        imgSquare: 'img/items/square/09.jpg',
        imgPortrait: 'img/items/portrait/09.jpg',
        name: 'Экшн-камера DIGMA DiCam 310 4K, WiFi, черный',
        price: 2290,
        number: 1
    },
    {
        id: 10,
        imgSquare: 'img/items/square/10.jpg',
        imgPortrait: 'img/items/portrait/10.jpg',
        name: 'Умная колонка ЯНДЕКС c голосовым помощником Алисой, серебристый',
        price: 5670,
        number: 1
    },
    {
        id: 11,
        imgSquare: 'img/items/square/11.jpg',
        imgPortrait: 'img/items/portrait/11.jpg',
        name: 'Квадрокоптер DJI Mini 2 MT2PD Fly More Combo с камерой, серый',
        price: 60990,
        number: 1
    },
    {
        id: 12,
        imgSquare: 'img/items/square/12.jpg',
        imgPortrait: 'img/items/portrait/12.jpg',
        name: 'Шлем виртуальной реальности HTC Vive PRO Eye EEA, черный/синий',
        price: 11960,
        number: 1
    },
    {
        id: 13,
        imgSquare: 'img/items/square/13.jpg',
        imgPortrait: 'img/items/portrait/13.jpg',
        name: 'МФУ лазерный CANON i-Sensys MF445dw, A4, лазерный, черный',
        price: 35310,
        number: 1
    },
    {
        id: 14,
        imgSquare: 'img/items/square/14.jpg',
        imgPortrait: 'img/items/portrait/14.jpg',
        name: 'Смарт-часы AMAZFIT Bip U, 1.43", зеленый / зеленый',
        price: 4490,
        number: 1
    },
    {
        id: 15,
        imgSquare: 'img/items/square/15.jpg',
        imgPortrait: 'img/items/portrait/15.jpg',
        name: 'Кофемашина PHILIPS EP1224/00, серый/черный',
        price: 29990,
        number: 1
    },
    {
        id: 16,
        imgSquare: 'img/items/square/16.jpg',
        imgPortrait: 'img/items/portrait/16.jpg',
        name: 'Гироскутер MIZAR MZ10,5CN, 10.5", карбон',
        price: 12990,
        number: 1
    },    
]
const cartCounter = document.querySelector('.cart__counter')
const cartLink = document.querySelector('.cart')
const itemCataloge = document.querySelector('.main__body')
let cart = JSON.parse(localStorage.getItem('saveCart')) || []
let counter = cart.length

cartCounter.innerHTML = counter || 0

const createItemCataloge = function () {
    if (itemCataloge) {
        itemCataloge.innerHTML = ''
        for (let item of cataloge) {

            if ( cart.map(i => i.id).includes(item.id) ) {
                itemCataloge.innerHTML += `
                    <div class="maim__column column">
                        <div class="columm__item">
                            <div class="column__image _ibg">
                                <img src="${item.imgSquare}" alt="">
                            </div>
                            <div class="column__name">${item.name}</div>
                            <div class="column__price">${item.price} ₽</div>
                            <button class="column__btn pushed" id="${item.id}">Добавить в корзину</button>
                        </div>                        
                    </div>
                `
            } else {
                itemCataloge.innerHTML += `
                    <div class="maim__column column">
                        <div class="columm__item">
                            <div class="column__image _ibg">
                                <img src="${item.imgSquare}" alt="">
                            </div>
                            <div class="column__name">${item.name}</div>
                            <div class="column__price">${item.price} ₽</div>
                            <button class="column__btn" id="${item.id}">Добавить в корзину</button>
                        </div>                        
                    </div>
                `
            }
        }
    }
}
createItemCataloge()

const toCartBtns = document.querySelectorAll('.column__btn')

for (let btn of toCartBtns) {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('pushed')) {
            return
        } else {
            let id = +btn.getAttribute("id")
            btn.classList.add('pushed')
            btn.innerHTML = 'В корзине'
            if (cart.map(i => i.id).includes(id)) {
                return
            } else {
                cart.push(cataloge[id-1])
                counter = cart.length
                cartCounter.innerHTML = counter
            }            
        }        
    })
}

cartLink.addEventListener('click', (e) => {
    e.preventDefault()
    if (document.location.href.includes('cart')) {
        return
    } else {
        document.location.href = "cart.html"
    }
})

window.onbeforeunload = function(e) {
    if (document.location.href.includes('cart')) {
        localStorage.setItem('saveCart', JSON.stringify(cartCart))
    } else {
        localStorage.setItem('saveCart', JSON.stringify(cart))
    }
}


