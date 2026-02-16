class Advert{
    /**
     * @param {string} name
     * @param {number} price
     * @param {string} imageUrl
     * @param {boolean} isFavorite
     */
    constructor(name, price, imageUrl, isFavorite) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.isFavorite = isFavorite;
    }
}
let adverts = [];

adverts.push(new Advert("Track 2", 8000, "https://i.siteapi.org/CankSLwN9POoXNIqsccvOz2m8Co=/0x0:962x630/s2.siteapi.org/44b0dfc585a3400/img/3ua6wqve4fcwocog48ogwcw04w8o0k", false));
adverts.push(new Advert("Kingston Fury 32 gb", 35000, "https://brigo.ru/upload/iblock/b06/7irmzqb0cgqppmv2vd6rtlzahzkaptzo/1146087.jpeg",false));
adverts.push(new Advert("Футболка клещ рианна гоблин", 3500, "https://ae-pic-a1.aliexpress-media.com/kf/S0f289244045f4905b1831a7edc21937ai.jpg",true));

function changeIsFavorite(advert){
    advert.isFavorite = !(advert.isFavorite);
}

let mainPage = document.getElementById("main-page");
adverts.forEach(advert => {
    mainPage.innerHTML += "<div class='item'>" +
        `<img class='picture' src=${advert.imageUrl} alt="">` +
        `<p class='name'>${advert.name}</p>` +
        `<p class='price'><b>${advert.price} ₽</b></p>` +
        `<button id='btn'>${advert.isFavorite ? "♥" : "♡"}</button>`
        "</div>";
    btn = document.getElementById("btn");
    btn.addEventListener("click", changeIsFavorite(advert));
})
