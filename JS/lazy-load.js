//зараз сафарі також підтримує атрибут loading="lazy"
//тому підклюсати додатково бібліотеку не потрібно, але є бібліотека lazysizes

const lazyImgRef = document.querySelectorAll('img[loading="lazy"]')

lazyImgRef.forEach(img => {
  img.addEventListener('load', onImageLoaded, { once: true })//ця штука автоматично буде знімати addEventListener і видаляти після спрацювання
})

function onImageLoaded(e) {
  console.log(e.target)
  e.target.classList.add('appear')
} 


//!!!===+++FEATURE DETECTION
//якщо б сафарі чи якийсь інший браузер не підтримував loading="lazy" з коробки то
//ми б використовували бібліотеку lazysizes і тоді по умові

//строка нижче називається фіча детекшн(виявлення можливості браузера)
if ('loading' in HTMLImageElement.prototype) {//ця строка перевіряє чи підтримує браузер 'loading'
  console.log('браузер підтримує ліниве завантаження img')
  
  const lazyImages = document.querySelectorAll('img[loadinng="lazy"]')
     lazyImages.forEach(img => {
     img.src = img.dataset.src//якщо підтримує то ми в атрибут src добавляємо url з атрибуту 
  })
} else {
  console.log('браузер НЕ підтримує ліниве завантаження img')

  //якщо не підтримує, тоді підключаємо бібліотеку
  const script = document.createElement('script')
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js'
  script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=='
  script.crossOrigin = 'anonymous'
  script.referrerpolicy = 'no-referrer'

  document.body.appendChild(script)
}
