/*Chatty events
Прийоми throttling i debouncing з Lodash*/

//Mousemove i throttle
const coordsOutputRef = document.querySelector('.js-coords')
let mouseMoveCbInvocationCounter = 0

window.addEventListener('mousemove', _.throttle(onMouseMove, 300))//тротл юзаємо при скролі

function onMouseMove(e) {
    mouseMoveCbInvocationCounter += 1
    
    coordsOutputRef.textContent = `
    К-сть викликів onMouseMove: ${mouseMoveCbInvocationCounter}
    X: ${e.clientX},
    Y: ${e.clientY}`
}



//INPUT I DEBOUNCE
const inputRef = document.querySelector('.js-input')
const outputRef = document.querySelector('.js-output')
let inputCbInvocationCounter = 0

inputRef.addEventListener('input', _.debounce(onInputChange, 500))//дебаунс юзаємо коли потрібно виконати ф-цію після припинення якоїсь дії. Наприклад вводі тексту в інпут

function onInputChange(e) {
    inputCbInvocationCounter += 1

    outputRef.textContent = `
    К-сть викликів OnInputChange: ${inputCbInvocationCounter},
    Значення: ${e.target.value}`
}
