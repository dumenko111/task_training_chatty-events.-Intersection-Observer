

const lazyImgRef = document.querySelectorAll('img[loading="lazy"]')

lazyImgRef.forEach(img => {
  img.addEventListener('load', onImageLoaded, { once: true })//ця штука автоматично буде знімати addEventListener і видаляти після спрацювання
})

function onImageLoaded(e) {
  console.log(e.target)
  e.target.classList.add('appear')
} 




