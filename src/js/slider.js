const swiper = new Swiper('.sample-slider', {
  pagination: {
    el: '.swiper-pagination'
  },

  on: {
    resize: function enableOnlyMobile(swiper) {
      // Disable the slider when the window width is less than or equal to 960
      if (767 < window.innerWidth) {
        swiper.disable()
        swiper.el.classList.add('-non-slider')
      } else {
        swiper.enable()
        swiper.el.classList.remove('-non-slider')
      }
    }
  }
})

function show() {
  const assideButtonOns = document.querySelectorAll('.aside__button--on')

  for (const assideButtonOn of assideButtonOns) {
    assideButtonOn.addEventListener('click', function () {
      // Определяем, в каком блоке находится кнопка
      const block = this.closest('.technic, .equipment')
      if (block) {
        this.classList.toggle('swap')
        const swiperSlides = block.querySelectorAll('.swiper-slide')
        if (this.classList.contains('swap')) {
          this.textContent = 'Скрыть'
          for (const slide of swiperSlides) {
            slide.classList.add('visible')
          }
        } else {
          this.textContent = 'Показать всё'
          for (const slide of swiperSlides) {
            slide.classList.remove('visible')
          }
        }
      }
    })
  }
}

show()
