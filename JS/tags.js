
//РОБИМО МОЖЛИВИЙ ВИБІР ТІЛЬКИ ОДНІЄЇ КНОПКИ ===== РОЗКОМЕНТУЙ І ЗАКОМЕНТУЙ НИЖЧЕ
// const tagsContainer = document.querySelector('.js-tags')
// let selectedTags = null;//змінна для збереження і виводу значення дата атрибута при кліці на кнопку

// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick(e) {
//     if (e.target.nodeName !== 'BUTTON') return
    
//     const currentActiveBtn = document.querySelector('.active-btn') //перевіряємо чи такий клас вже добвлявся ранніше перед кліком на кнопку, якщо так, то знімаємо його
//     if (currentActiveBtn) { //якщо є, знімаємо клас
//         currentActiveBtn.classList.remove('active-btn')
//     }
//     // currentActiveBtn?.classList.remove('active-btn')//!!!!!в спеках за 20рік - це заміна if, але не всюди підійде


//     e.target.classList.add('active-btn')

//     let selectedTags = null;//змінна для виводу значення дата атрибута при кліці на кнопку
//     selectedTags = e.target.dataset.value; //присвоюємо змінній selectedTags значення дата атрибутів

//     console.log(selectedTags) //виводимо значення дата атрибутів при кліці
// }



//РОБИМО МОЖЛИВИЙ ВИБІР ДЕКІЛЬКОХ КНОПОК І ЗБЕРІГАЄМО ВИБРАНІ ЗНАЧЕННЯ КНОПОК В МАСИВ
const tagsContainerRef = document.querySelector('.js-tags')

let selectedTagsSET = new Set() //++тут зберігаємо значення дата атрибуту, тих кнопок, які вибрав користувач
//++new Set() зберігає тільки унікальні значення, це для того, щоб не дублювався вибір одних і тих самих кнопок
//+++на унікальність працює тільки з примітивами


tagsContainerRef.addEventListener('click', onTagsContainerClick)

function onTagsContainerClick(e) {
    if(e.target.nodeName !== 'BUTTON') return //перевіряємо щоб клік був на кнопку
    
    const isActiveBtn = e.target.classList.contains('active-btn')//перевіряємо чи є на кнопці клас
    if (isActiveBtn) { //якщо true то зі змінної selectedTagsSET видалиться значення вибраної кнопки
        selectedTagsSET.delete(e.target.dataset.value)
    } else { //якщо false то добавиться
        selectedTagsSET.add(e.target.dataset.value)
    }
    
    e.target.classList.toggle('active-btn')

    console.log(selectedTagsSET)
}