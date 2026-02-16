class Advert{
    /**
     * @param {string} name
     * @param {number} price
     * @param {boolean} isFavorite
     */
    constructor(name, price, isFavorite) {
        this.name = name;
        this.price = price;
        this.isFavorite = isFavorite;
    }
}
let adverts = [];
document.addEventListener('DOMContentLoaded', function() {

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
});
