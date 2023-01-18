
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
    if(e.target.nodeName !== 'BUTTON') return
    
    e.target.classList.toggle('active-btn')
    

    selectedTagsSET.add(e.target.dataset.value)

    const activeCurrentBtn = document.querySelector('.active-btn')
    if (activeCurrentBtn) {
        selectedTagsSET.remove(e.target.dataset.value)
    }
    
    console.log(selectedTagsSET)

}
//ЗАКІНЧИВ НА SET ах