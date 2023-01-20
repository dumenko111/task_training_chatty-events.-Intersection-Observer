const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
]
/*  +Рендиремо розмітку елементів списку
    +Слухаємо зміни у фільтрі
    +Фільтруємо дані і рендиремо нові елементи*/

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
}

//////////////////////////////////////
refs.list.innerHTML = createListMarkup(tech) //викликає і рендерить розмітку з ф-ції createListMarkup

function createListMarkup(item) {
    return item.map(item => `<li>${item.label}</li>`).join('')
}
///////////////////////////////////////
refs.input.addEventListener('input', _.debounce(onInputChange, 500))

function onInputChange(e) {
    const filterEl = tech.filter(item => item.label.toLowerCase().includes(e.target.value.toLowerCase()))//перевіряємо чи співпадають введені символи в інпуті з тими що в розмітці
    
    const filteredElMarkup = createListMarkup(filterEl) //користуємося вже готовою ф-цією, яка створює розмітку.
    refs.list.innerHTML = filteredElMarkup//рендиремо відфільтровану розмітку
}
