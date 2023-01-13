function navbar() {
  const navbarMenu = document.querySelector('.navbar__menu')
  const cartMenu = document.querySelector('.cart')
  const giftsMenu = document.querySelector('.gifts')

  document.addEventListener('click', (e) => {
    if (e.target.closest('.navbar__toggle')) {
      navbarMenu.classList.toggle('show--menu')
    }

    if (e.target.closest('.navbar__close')) {
      navbarMenu.classList.remove('show--menu')
    }

    /* Menu Carrito */
    if (e.target.closest('.navbar__cart')) {
      cartMenu.classList.toggle('show--cart')
    }

    if (e.target.closest('.cart__close')) {
      cartMenu.classList.remove('show--cart')
    }

    /* Menu gifts */
    if (e.target.closest('.navbar__wish')) {
      giftsMenu.classList.toggle('show--gift')
    }

    if (e.target.closest('.gift__close')) {
      giftsMenu.classList.remove('show--gift')
    }

    
  })
}

export default navbar