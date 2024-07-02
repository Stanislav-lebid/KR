
(function () {

 const countDown = () => {
     const countDate = new Date('July 14 , 2024 00:00:00').getTime();
     const now = new Date().getTime();
     const gap = countDate - now;
     
     const second = 1000;
     const minute = second * 60;
     const hour = minute * 60;
     const day =  hour * 24;

     const textDay = Math.floor(gap / day);
     const textHour = Math.floor((gap % day) / hour);
     const textMinute = Math.floor((gap % hour) / minute);
     const textSecond = Math.floor((gap % minute) / second);
     

     document.querySelector(".day").innerText = textDay;
     document.querySelector(".hour").innerText = textHour;
     document.querySelector(".minute").innerText = textMinute;
     document.querySelector(".second").innerText = textSecond;
    };
    setInterval(countDown);
  

    const products = [
        {
            id: 1,
            title: 'River Chalet',
            itemsList: ['✔ 1 Спальня',
                '✔ 1 Ванна',
                '✔ 2 Ліжка',
                'Гідромасажна ванна',
                'Плазма',
                'Камін',
                'Wi-Fi'],
            price: '$65',
            image: 'img/rent-offer/rever-chalet.webp'
        },
        {
            id: 2,
            title: 'Lookout Lodge',
            itemsList: ['✔ 2 Спальні',
                '✔ 1 Ванна',
                '✔ 4 Ліжка',
                'Джакузі',
                'Басейн',
                'Камін',
                'Wi-Fi'],
            price: '$75',
            image: 'img/rent-offer/smoky-view-chalet.webp'
        },
        {
            id: 3,
            title: 'Smoky view chalet',
            itemsList: ['✔ 2 Спальні',
                        '✔ 2 Ванни',
                        '✔ 6 Ліжок',
                        'Гідромасажна ванна',
                        'Аерохокей',
                        'Камін',
                        'Wi-Fi'],
             price: '$85',
             image: 'img/rent-offer/lookout-lodge.webp'
        },
        {
            id: 4,
            title: 'Montain Haven',
            itemsList: ['✔ 3 Спальні',
                         '✔ 2 Ванни',
                         '✔ 8 Ліжок',
                         'Гідромасажна ванна',
                         'Аерохокей',
                         'Гриль',
                         'Wi-Fi'],
             price: '$100',
             image: 'img/rent-offer/mountain-haven.webp'
         },
         {
            id: 5,
            title: 'Mountain Splash',
            itemsList: ['✔ 3 Спальні',
                        '✔ 3 Ванни',
                        '✔ 10 Ліжка',
                        'Приватний критий басейн',
                        'Більярдний стіл',
                        'Джакузі',
                        'Аерохокей'],
             price: '$150',
             image: 'img/rent-offer/mountain-splash.webp'
         }
    ]
    function renderProducts(products) {
        const productsContainer = document.getElementById('products');
        let content = '';
        for (const product of products) {
            content += `
                <div class="products">
                    <div class="cabin-rentals-img">
                        <img class="cards-img" src="${product.image}" alt="${product.title}" />
                    </div>
                    <article>
                        <h2><span class="price">${product.price}</span>/За ніч</h2>
                        <h3>${product.title}</h3>
                        <article class="bottons">
                           ${product.itemsList.map(item => `<p>${item}</p>`).join('')}
                        </article>
                        <a href="cabin-reserve.html" class="orange-button">Замовити</a>
                    </article>
                </div>
            `;
        }
        productsContainer.innerHTML = content;
    }
    renderProducts(products)
})();
