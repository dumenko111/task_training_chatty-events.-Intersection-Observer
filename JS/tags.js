
//робимо можливий вибір тільки однієї кнопки
const tagsContainer = document.querySelector('.js-tags')
let selectedTags = null;//змінна для збереження і виводу значення дата атрибута при кліці на кнопку

tagsContainer.addEventListener('click', onTagsContainerClick)

function onTagsContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') return
    
    const currentActiveBtn = document.querySelector('.active-btn') //перевіряємо чи такий клас вже добвлявся ранніше перед кліком на кнопку, якщо так, то знімаємо його
    if (currentActiveBtn) { //якщо є знімаємо клас
        currentActiveBtn.classList.remove('active-btn')
    }
    // currentActiveBtn?.classList.remove('active-btn')//!!!!!в спеках за 20рік - це заміна if


    e.target.classList.add('active-btn')

    let selectedTags = null;//змінна для виводу значення дата атрибута при кліці на кнопку
    selectedTags = e.target.dataset.value; //присвоюємо значення дата атрибутів 

    console.log(selectedTags) //виводимо значення дата атрибутів при кліці

}