const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e64', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
]
//майбутня розмітка - потім просто копіюю у ф-цію і рендерю
/* <div class="color-card">
      <div class="color-swatch" 
      data-hex="#955014" 
      data-rgb="149,80,20" 
      style="background-color: #955014;"
      ></div>
      <div class="color-meta">
        <p>HEX: #955014</p>
        <p>RGB: 149,80,20</p>
      </div>
    </div> */

const containerRef = document.querySelector('.js-pallete')
const markupCards = createColorCardsMarkup(colors)//в цю змінну записуємо результат виклику ф-ції

containerRef.insertAdjacentHTML('beforeend', markupCards )


function createColorCardsMarkup(colors) {
  return colors.map(({ hex, rgb }) => { //map робимо карточку для кожного об'єкту з масиву colors
    return `
  <div class="color-card">
      <div 
      class="color-swatch" 
      data-hex="${hex}" 
      data-rgb="${rgb}" 
      style="background-color: ${hex};"
      ></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
  </div>`
  })
    .join('')
}
/////////робимо зміну бекграунду на боді по кліку на cards
containerRef.addEventListener('click', onPalleteContainerClick)
const selectedTagsSET = new Set()

function onPalleteContainerClick(e) {
  if(!e.target.classList.contains('color-swatch')) return
  
  const currentActiveCard = document.querySelector('.color-card.is-active')

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active')
  }

  const parrentColorCard = e.target.closest('.color-card')//closest перевіряє чиє у предка клас
  parrentColorCard.classList.add('is-active')

    document.body.style.backgroundColor = e.target.dataset.hex
}