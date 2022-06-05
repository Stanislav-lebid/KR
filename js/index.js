(function () {
    const things = [
        {
            id: 1,
            image: 'img/index/things-to-do/horseriding.jpg',
            title: 'Верхова їзда',
            price: '$4',
            description: 'Здійсніть розмірену романтичну прогулянку на конях і насолоджуйтесь нашими незабутніми мальовничими околицями.'
        },
        {
            id: 2,
            image: 'img/index/things-to-do/rockclimbing.jpg',
            title: 'Скелелазіння',
            price: '$2',
            description: 'Незалежно від того, чи є ви професійним альпіністом або вперше, Йосеміті одне з найкращих місць для цього виду спорту.'
        },
        {
            id: 3,
            image: 'img/index/things-to-do/biking.jpg',
            title: 'Їзда на велосипеді',
            price: '$1',
            description: 'Візьміть напрокат велосипед і зробіть веселу та легку двоколісну подорож долиною Йосеміті. Зазвичай це займає 2 години.'
        },
        {
            id: 4,
            image: 'img/index/things-to-do/rafting.jpg',
            title: 'Рафтинг',
            price: '$3',
            description: 'У вас є ідеальний вибір, щоб поєднати свою пригоду на рафтингу з відвідуванням парку. Перевірте наші води.'
        },
        {
            id: 5,
            image: 'img/index/things-to-do/fishing.jpg',
            title: 'Риболовля',
            price: '$2',
            description: 'Завдяки низці постійних струмків і гірських озер ми пропонуємо рибалкам усіх рівнів різноманітні можливості для риболовлі.'
        },
        {
            id: 6,
            image: 'img/index/things-to-do/spas.jpg',
            title: 'Спа та оздоровлення',
            price: '$2',
            description: 'Після довгого виснажливого дня ви можете розслабитися та побалувати себе в нашому унікальному спа-центрі та оздоровчому центрі.'
        }
    ];

    function renderBlock(things) {
        const thingsContainer = document.querySelector('.things-block');
        for (const thing of things) {
            thingsContainer.innerHTML += `
            <div class="things-card-blocks">
                <img src="${thing.image}" alt="${thing.title}">
                <h2>${thing.title}</h2>
                <h3>${thing.price}/годину</h3>
                <p>${thing.description}</p>
            </div>
            `
        }
    }
    renderBlock(things);
})();