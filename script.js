document.addEventListener('DOMContentLoaded', function () {
    const phone_Btn = document.getElementById('phone');

    phone_Btn.addEventListener('click', function () {
        const original_Text = phone_Btn.innerHTML;
        const original_Style = phone_Btn.style.cssText;

        phone_Btn.textContent = '📞 +7(913) 365 11 08';
        phone_Btn.classList.add('show_number');
        console.log('Телефон показан!');

        phone_Btn.disabled = true;

        setTimeout(function () {
            phone_Btn.innerHTML = original_Text;
            phone_Btn.style.cssText = original_Style;
            phone_Btn.classList.remove('show_number');
            phone_Btn.disabled = false;
            console.log('Кнопка возвращена в исходное состояние.');
        }, 120000);
    });




    const back_Button = document.querySelector('.back_button');

    back_Button.addEventListener('click', function () {
        console.log('Назад, к списку.');
    });

    const similar_Item = document.querySelectorAll('.similar_item');

    similar_Item.forEach(item => {
        item.addEventListener('click', function () {
            const name = this.querySelector('.similar_name').textContent;
            const price = this.querySelector('.similar_price').textContent;
            console.log(`Выбрано: ${name} - ${price}`);
        });
    });
    function update_Time() {
        const time_Element = document.querySelector('.meta_info span:last-child');
        if (time_Element) {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            time_Element.textContent = ` Сегодня ${hours}: ${minutes}`;
        }
    }

    update_Time();
    setInterval(update_Time, 60000);
});
class Advert {
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
document.addEventListener('DOMContentLoaded', function () {



 const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.item');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            
            const filter = searchInput.value.toLowerCase(); 

            items.forEach(item => {
                // Сохраняем исходный текст (если его еще нет в памяти атрибута)
                if (!item.dataset.originalText) {
                    item.dataset.originalText = item.textContent;
                }
                
                const originalText = item.dataset.originalText;
                const lowerText = originalText.toLowerCase();

                if (lowerText.includes(filter) && filter !== '') {
                    item.style.display = ''; // Показываем элемент
                    
                    // Выделение совпадений
                    const regex = new RegExp(`(${filter})`, 'gi');
                    item.innerHTML = originalText.replace(regex, '<b style="color: blue;">$1</b>');
                } else if (filter === '') {
                    item.style.display = ''; // Если поиск пустой, показываем всё как обычно
                    item.textContent = originalText;
                } else {
                    item.style.display = 'none'; // Скрываем, если не совпало
                }
            });
        });
    }










    const sectionsWithToggle = document.querySelectorAll('.sidemenu .selection.ram-section');
    sectionsWithToggle.forEach(section => {
        const showMoreButton = section.querySelector('.show-more-button');
        const collapseButton = section.querySelector('.collapse-button');
        const hiddenItems = section.querySelector('.hidden-items');
        const visibleItems = section.querySelector('.visible-items');

        if (showMoreButton && collapseButton && hiddenItems && visibleItems) {
            showMoreButton.addEventListener('click', function () {
                hiddenItems.style.display = 'block';
                showMoreButton.style.display = 'none';
                collapseButton.style.display = 'block';
            });
            collapseButton.addEventListener('click', function () {
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
}
);



adverts.push(new Advert("Track 2", 8000, "https://i.siteapi.org/CankSLwN9POoXNIqsccvOz2m8Co=/0x0:962x630/s2.siteapi.org/44b0dfc585a3400/img/3ua6wqve4fcwocog48ogwcw04w8o0k", false));
adverts.push(new Advert("Kingston Fury 32 gb", 35000, "https://brigo.ru/upload/iblock/b06/7irmzqb0cgqppmv2vd6rtlzahzkaptzo/1146087.jpeg", false));
adverts.push(new Advert("Футболка клещ рианна гоблин", 3500, "https://ae-pic-a1.aliexpress-media.com/kf/S0f289244045f4905b1831a7edc21937ai.jpg", true));

const changeIsFavorite = function (e, advert) {
    advert.isFavorite = !(advert.isFavorite);
    if (advert.isFavorite) {
        e.target.innerText = "♥";
    }
    else {
        e.target.innerText = "♡";
    }
}

let mainPage = document.getElementById("main-page");
adverts.forEach((advert, index) => {
    mainPage.innerHTML += "<div class='item'>" +
        `<img class='picture' src=${advert.imageUrl} alt="">` +
        `<p class='name'>${advert.name}</p>` +
        `<p class='price'><b>${advert.price} ₽</b></p>` +
        `<button id='btn${index}'>${advert.isFavorite ? "♥" : "♡"}</button>`
    "</div>";
})
adverts.forEach((advert, index) => {
    const btn = document.getElementById(`btn${index}`);
    btn.addEventListener("click", (e) => changeIsFavorite(e, advert));
});
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    const mainContainer = document.getElementById('main-page');
    resultsContainer.innerHTML = '';
    if (query === '') {
        if (mainContainer) mainContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
    }
    const filteredProducts = adverts.filter(advert => advert.name.toLowerCase().includes(query));
    if (filteredProducts > 0) {
        if (mainContainer) mainContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        filteredProducts.forEach(adverts => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = "<div class='item'>" +
                `<img class='picture' src=${advert.imageUrl} alt="">` +
                `<p class='name'>${advert.name}</p>` +
                `<p class='price'><b>${advert.price} ₽</b></p>` +
                `<button id='btn${index}'>${advert.isFavorite ? "♥" : "♡"}</button>`
            "</div>";
            resultsContainer.appendChild(productItem);
        });
    }
});




