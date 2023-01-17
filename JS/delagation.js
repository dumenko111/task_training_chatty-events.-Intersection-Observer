//делагування подій
//вішаємо слухача кліку на загального предка

const refs = {
    addBtn: document.querySelector('.js-add-btn'),
    containerRef: document.querySelector('.container')
}

refs.containerRef.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') return //перевірка щоб клік був тільки по кнопці // можна ще перевіряти по class=""
   
    
    console.log(e.target)
})


//код додавання кнопки
refs.addBtn.addEventListener('click', onAddBtnClick)
let labelCounter = 6;

function onAddBtnClick() {
    const newBtn = document.createElement('button')
    newBtn.type = 'button'
    newBtn.textContent = `Кнопка ${labelCounter}`

    refs.containerRef.appendChild(newBtn)
    labelCounter ++
}