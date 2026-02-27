class Adverta{
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
    const sectionsWithToggle = document.querySelectorAll('.sidemenu .selection.ram-section');
    sectionsWithToggle.forEach(section => {
        const showMoreButton = section.querySelector('.show-more-button');
        const collapseButton = section.querySelector('.collapse-button');
        const hiddenItems = section.querySelector('.hidden-items');
        const visibleItems = section.querySelector('.visible-items');

        if (showMoreButton && collapseButton && hiddenItems && visibleItems) {
            showMoreButton.addEventListener('click', function() {
                hiddenItems.style.display = 'block';
                showMoreButton.style.display = 'none';
                collapseButton.style.display = 'block';
            });
            collapseButton.addEventListener('click', function() {
                hiddenItems.style.display = 'none';
                showMoreButton.style.display = 'block';
                collapseButton.style.display = 'none';
                const hiddenCheckboxes = hiddenItems.querySelectorAll('input[type="checkbox"]');
                hiddenCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
            });
        }
    });

adverts.push(new Adverta("Track 2", 8000, "https://i.siteapi.org/CankSLwN9POoXNIqsccvOz2m8Co=/0x0:962x630/s2.siteapi.org/44b0dfc585a3400/img/3ua6wqve4fcwocog48ogwcw04w8o0k", false));
adverts.push(new Adverta("Kingston Fury 32 gb", 35000, "https://brigo.ru/upload/iblock/b06/7irmzqb0cgqppmv2vd6rtlzahzkaptzo/1146087.jpeg",false));
adverts.push(new Adverta("Футболка клещ рианна гоблин", 3500, "https://ae-pic-a1.aliexpress-media.com/kf/S0f289244045f4905b1831a7edc21937ai.jpg",true));

const changeIsFavorite = function(e, advert){
    advert.isFavorite = !(advert.isFavorite);
    if(advert.isFavorite){
        e.target.innerText = "♥";
    }
    else{
        e.target.innerText = "♡";
    }
}
    let mainPage = document.getElementById("main-page");
    adverts.forEach((advert, index) => {
        mainPage.innerHTML += "<div class='item'>" +
            `<img class='picture' src=${advert.imageUrl} alt="">` +
            `<p class='name'>${advert.name}</p>` +
            `<p class='price'><b>${advert.price} ₽</b></p>` +
            `<button id='btn${index}'>${advert.isFavorite ? "♥" : "♡"}</button>`+
            "</div>";
    })
    adverts.forEach((advert, index) => {
        const btn = document.getElementById(`btn${index}`);
        btn.addEventListener("click", (e) => changeIsFavorite(e, advert));
    });

    const searchInput= document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    const mainContainer=document.getElementById('main-page');
    resultsContainer.innerHTML = '';
    if (query === ''){
        if(mainContainer)mainContainer.style.display='block';
        resultsContainer.style.display='none';
    }
    const filteredProducts = adverts.filter(advert => advert.name.toLowerCase().includes(query));
    if(filteredProducts>0) {
        if (mainContainer) mainContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        filteredProducts.forEach(advert => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = "<div class='item'>" +
                `<img class='picture' src=${advert.imageUrl} alt="">` +
                `<p class='name'>${advert.name}</p>` +
                `<p class='price'><b>${advert.price} ₽</b></p>` +
                `<button id='btn${index}'>${advert.isFavorite ? "♥" : "♡"}</button>`+
            "</div>";
            resultsContainer.appendChild(productItem);
        });
    }

