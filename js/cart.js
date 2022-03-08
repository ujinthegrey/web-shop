/* ---FORM-&-POP-UP----------------------- */
const form = document.getElementById('form')
const submitBtn = document.getElementById('submitBtn')
const body = document.querySelector('body')
const popup = document.getElementById('popup')
const popupClosers = document.querySelectorAll('._closer')


const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')

const nameLabel = document.getElementById('name__label')
const phoneLabel = document.getElementById('phone__label')
const emailLabel = document.getElementById('email__label')

const popupTitle = document.querySelector('.popup__title')
const popupText = document.querySelector('.popup__text')

let unlock = true
let orderNumber = JSON.parse(localStorage.getItem('saveOnderNumber')) || 1
const timeout = 800

/* ------------------ */
let cartCart = JSON.parse(localStorage.getItem('saveCart'))
const cartSum = document.querySelector('#price-sum')
const cartCartCounter = document.querySelector('.cart__counter')
let counter2 = cartCart.length
const cartList = document.querySelector('.cart-list__body')
const cartCartLink = document.querySelector('.cart__disable')
const catalogeLink = document.querySelector('#cataloge-link')
let removeBtns = []

const toRemove = function() {
    removeBtns = document.querySelectorAll('.remove__btn')
    for (let removeBtn of removeBtns) {
        removeBtn.addEventListener('click', (e) => {
            e.preventDefault()
            let idToRemove = removeBtn.getAttribute("id")
            cartCart = cartCart.filter(item => !(item.id == idToRemove))
            toCount()
            toSum()
            createCartList() 
        })
    }
}

const changeNumber = function() {
    for (let item of cartCart) {
        let numberMinus = document.getElementById(`minus${item.id}`)
        let numberPlus = document.getElementById(`plus${item.id}`)
        let numberInput = document.getElementById(`input${item.id}`)
        let numberAlert = document.getElementById(`alert${item.id}`)
        numberMinus.addEventListener('click', (e) => {
            e.preventDefault()
            if (item.number === 1) {
                let idToRemove = item.id
                cartCart = cartCart.filter(i => !(i.id == idToRemove))
                toCount()
                toSum()
                createCartList() 
            } else {
                item.number = item.number - 1
                numberInput.innerHTML = item.number
                toSum()
            }           
        })
        numberPlus.addEventListener('click', (e) => {
            e.preventDefault()
            if (item.number === 10) {
                numberAlert.classList.add('show')
                setTimeout(() => {
                    numberAlert.classList.remove('show')
                }, 1500)
            } else {
                item.number = item.number + 1
                numberInput.innerHTML = item.number
                toSum()
            }            
        })       
    }
}

const createCartList = function () {
    cartList.innerHTML = ''
    for (let item of cartCart) {
        cartList.innerHTML += `
            <div class="cart-list__item item-cart">
                <div class="item-cart__image _ibg">
                    <img src="${item.imgPortrait}" alt="item">
                </div>
                <div class="item-cart__name">${item.name}</div>
                <div class="item-cart__number number">
                    <button class="number__minus number_btn" id="minus${item.id}">&minus;</button>
                    <imput class="number__text" type="number" id="input${item.id}">${item.number}</imput>
                    <button class="number__plus number_btn" id="plus${item.id}">&plus;</button>
                    <span class="number__alert" id="alert${item.id}">К заказу доступно не более 10шт.</span>
                </div>
                <div class="item-cart__price">${item.price} ₽</div>
                <div class="item-cart__remove remove">
                    <button class="remove__btn" id="${item.id}">&times;<span>&emsp;Удалить</span></button>
                </div>
            </div>
        `
    }
    toRemove()
    changeNumber()
    redirect()
}

const toCount = function() {
    counter2 = cartCart.length
    cartCartCounter.innerHTML = counter2
}

const toSum = function() {
    let acc = 0
    for (let item of cartCart) {
        acc += item.number * item.price
    }
    cartSum.innerHTML = acc
}

toCount()
toSum()
createCartList()

catalogeLink.addEventListener('click', (e) => {
    e.preventDefault()
    document.location.href = "index.html"  
})

/* ----POP=UP----------------------- */

form.addEventListener('submit', (e) => {
    e.preventDefault()
    popupTitle.innerHTML = `Спасибо ${name.value}, ваш заказ №${orderNumber} оформлен.`
    popupText.innerHTML = `В ближайшее время мы свяжемся с вами по телефону ${phone.value} для его подтверждения.`
    popup.classList.add('open')
    orderNumber++
    localStorage.setItem('saveOnderNumber', JSON.stringify(orderNumber))
    form.reset()
    cartCart = []         
})

for (let closer of popupClosers) {
    closer.addEventListener('click', (e) => {
        e.preventDefault()
        popup.classList.remove('open')
        toCount()
        toSum()
        createCartList() 
        redirect()
    })
}

function redirect() {
    if (cartList.innerHTML === '') {
        setTimeout(() => local = document.location.href = "index.html", 2000)
    }  
}