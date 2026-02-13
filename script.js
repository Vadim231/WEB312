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

adverts.push(new Advert("Track 2", 8000, false));
adverts.push(new Advert("Kingston Fury 32 gb", 35000, false));
adverts.push(new Advert("Футболка клещ рианна гоблин", 3500, true));

adverts.forEach(function(ad, index){
    console.log(index, ad.name);
});