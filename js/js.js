$(function () {
  const modal = $('[data-modal]')
  modal.on('click', function (event) {
    event.preventDefault()
    let mod = $(this).data('modal')

    $('.modal').addClass('show')
    $('body').addClass('no-scroll')
  })

  const close = $('[data-close]')
  close.on('click', function (event) {
    event.preventDefault()
    let parent = $(this).parents('.modal')

    parent.removeClass('show')
    $('body').removeClass('no-scroll')
  })

  $('.modal').on('click', function (event) {
    event.preventDefault()

    $(this).removeClass('show')
    $('body').removeClass('no-scroll')
  })

  $('.modal__inner').on('click', function (event) {
    event.stopPropagation()
  })

  let slider = $('#slider__item')
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    dots: true,
    autoplay: true,
  })

  let wedding = $('#wedding__inner')
  wedding.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    initialSlide: 1,
  })

  let header = $('#header')
  let screen = $('#screen')
  let screenH = screen.innerHeight()
  console.log(screenH)
  let scroll = $(window).scrollTop()

  $(window).on('scroll resize', function () {
    scroll = $(this).scrollTop()
    screenH = screen.innerHeight()

    if (scroll > screenH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  })
})

fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0')
  .then((response) => response.json()) // преобразуем ответ в json

  .then((data) => {
    console.log(data) // выводим в консоль результат выполнения response.json()
    document.querySelector('.dol').innerHTML =
      'USD 1 Доллар США: ' + data[4].Cur_OfficialRate + ' &#36;'

    var today = new Date()
    var date = today.getDate()
    var Month = today.getMonth() + 1
    var year = today.getFullYear()

    var el = document.querySelector('.kurs__data')
    el.innerHTML = 'Дата на сегодня : ' + date + '.' + Month + '.' + year

    document.querySelector('.rus').innerHTML =
      'RUB 100 Российских рублей: ' + data[16].Cur_OfficialRate + '&#8381;'
    document.querySelector('.eur').innerHTML =
      'EUR 1 Евро: ' + data[5].Cur_OfficialRate + '&euro;'
  })
  .catch((error) => console.error(error))

fetch('http://egr.gov.by/egrn/API.jsp?NM=100059271')
  .then((response) => response.json()) // преобразуем ответ в json

  .then((data) => {
    console.log(data) // выводим в консоль результат выполнения
  })
  .catch((error) => console.error(error))
