function toggleMobile() {
  var x = document.getElementById('myNav')
  var icon = document.getElement
  if (x.style.display === 'block') {
    x.style.display = 'none'
    x.classList.remove('open')
  } else {
    x.style.display = 'block'
    x.classList.add('open')
  }
}
