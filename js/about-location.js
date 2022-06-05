(function () {
    const cards = [
        {
            id: 1,
            image: 'img/about-location/section-services/horse.webp',
            title: 'Котедж Horse Ranch',
            description: 'Цей приватний котедж розташований на кінному ранчо з просторою огородженою територією. Дослідіть безліч обсаджених деревами стежок, подивіться на тварин на ранчо та дивіться вражаючі краєвиди.'
        },
        {
            id: 2,
            image: 'img/about-location/section-services/tuolumne-meadows-lodge.webp',
            title: 'Туолумне Медоус Лодж',
            description: 'Готель Tuolumne Meadows Lodge пропонує 70 кают-наметів, які можна орендувати з червня до кінця серпня. Це може бути вашим найкращим місцем для відпочинку після виснажливої подорожі.'
        },
        {
            id: 3,
            image: 'img/about-location/section-services/sunrise-vacation-rental.webp',
            title: 'Оренда на схід сонця',
            description: 'Цей прекрасний будинок для відпочинку чекає на вас. Цей світлий, чистий і сучасний будинок розташований за 49 миль від національного парку Йосеміті. Є нові ліжка та меблі.'
        },
        {
            id: 4,
            image: 'img/about-location/section-services/donya-maries-cottage.jpg',
            title: 'Котедж Доньї Марі',
            description: 'Цей сучасний заміський котедж, оточений соснами.'
        },
        {
            id: 5,
            image: 'img/about-location/section-services/sierra-meadow-cottage.webp',
            title: 'Котедж Сьєрра Медоу',
            description: 'Орендуйте цю каюту, розташовану неподалік від національного парку Йосеміті, подихайте чистим гірським повітрям, пийте найчистішу воду та насолоджуйтесь захоплюючим видом на захід/схід сонця з тераси.'
        },
        {
            id: 6,
            image: 'img/about-location/section-services/yosemites-river-house.webp',
            title: 'Будинок річки Йосеміті',
            description: 'З готелю Yosemite’s River House відкривається захоплюючий вид на річку Мерсед. Це вражаюче місце неодмінно змусить вас повернутися. Орендуйте та насолоджуйтесь перебуванням!'
        }
    ];

    function renderCards(cards) {
        const cardsContainer = document.querySelector('.services-card-box');
        for (const card of cards) {
            cardsContainer.innerHTML += `
            <div class="card">
                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                </div>
            </div>
            `
        }
    }
    renderCards(cards);
})();