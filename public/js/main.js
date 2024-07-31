;(() => {
  const buttonsElem = document.querySelectorAll('#slider i')
  const sliderImagesElem = document.querySelector('#slider .slider__images')
  const imagesElem = sliderImagesElem.children
  const className = 'slider__image--show'
  const transitionDuration = 300
  let isTransitioning = false

  function nextImage() {
    if (isTransitioning) return
    isTransitioning = true

    sliderImagesElem.style.transition = `transform ${transitionDuration}ms`
    sliderImagesElem.style.transform = 'translateX(-300%)'
    imagesElem[2].classList.remove(className)
    imagesElem[3].classList.add(className)

    setTimeout(() => {
      sliderImagesElem.style.transition = 'none'
      sliderImagesElem.style.transform = 'translateX(-200%)'
      sliderImagesElem.append(imagesElem[0])
      isTransitioning = false
    }, transitionDuration)
  }

  function previousImage() {
    if (isTransitioning) return
    isTransitioning = true

    sliderImagesElem.style.transition = `transform ${transitionDuration}ms`
    sliderImagesElem.style.transform = 'translateX(-100%)'
    imagesElem[1].classList.add(className)
    imagesElem[2].classList.remove(className)

    setTimeout(() => {
      sliderImagesElem.style.transition = 'none'
      sliderImagesElem.style.transform = 'translateX(-200%)'
      sliderImagesElem.prepend(imagesElem[imagesElem.length - 1])
      isTransitioning = false
    }, transitionDuration)
  }

  setInterval(nextImage, 3000) 

  buttonsElem[0].addEventListener('click', previousImage)
  buttonsElem[1].addEventListener('click', nextImage)
})()
