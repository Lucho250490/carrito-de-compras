import db from '../data/data.js'
import dbs from '../data/datag.js'

import { carrito, regalo, pintarCarritoDeCompras } from './cart.js'

const productos = db
const regalos = dbs

const productList = document.querySelector('.products__list')

function pintarProductos() {
  let html = ''

  for (let { id, nombre, descripcion, precio, cantidad, imagen, categoria } of productos) {
    html += `<article class="products__item ${categoria}">
    <div class="products__img">
      <img src="${imagen}" alt="${nombre}">
      <span class="products__stock">Quedan ${cantidad}</span>
    </div>
    <div class="products__content">
      <h2 class="products__name">
        <span>${nombre}</span>
        <span class="products__price">$ ${precio}</span>
      </h2>
      <p class="products__info">${descripcion}</p>
    </div>
    <div class="products__buttons">
      <button class="button products__button btn--wish" data-id="${id}">
        <i class='bx bx-heart-circle button--icon' style='color:#1604fb' ></i>
      </button>
      <button class="button products__button btn--cart" data-id="${id}">
      <i class='bx bxl-shopify bx-fade-left button--icon' style='color:#1200ff' ></i>
      </button>
    </div>
  </article>`
  }

  productList.innerHTML = html
}

const giftList = document.querySelector('.gift__list')

function pintarRegalos() {
  let html1 = ''

  for (let { id, nombre, descripcion, precio, cantidad, imagen, categoria } of regalos) {
    html1 += `<article class="gifs__item ${categoria}">
    <div class="gifts__img">
      <img src="${imagen}" alt="${nombre}">
      <span class="products__stock">Quedan ${cantidad}</span>
    </div>
    <div class="products__content">
      <h2 class="products__name">
        <span>${nombre}</span>
        <span class="products__price">$ ${precio}</span>
      </h2>
      <p class="products__info">${descripcion}</p>
    </div>
    <div class="products__buttons">
      <button class="button products__button btn--wish" data-id="${id}">
        <i class='bx bx-heart-circle button--icon' style='color:#1604fb' ></i>
      </button>
      <button class="button products__button btn--cart" data-id="${id}">
      <i class='bx bxl-shopify bx-fade-left button--icon' style='color:#1200ff' ></i>
      </button>
    </div>
  </article>`
  }

  giftList.innerHTML = html1
}




/* Agregar al carrito */

function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }

  pintarCarritoDeCompras()
}

// #4.1 agregar regalo
function agregarRegalo(id, cantidad = 1) {
  const regaloEncontrado = regalos.find((r) => r.id === id)

  if (regaloEncontrado && regaloEncontrado.cantidad > 0) {
    const articulorEncontrado = regalo.find((r) => r.id === id)

    if (articulorEncontrado) {
      if (checarStockr(id, cantidad + articulorEncontrado.cantidad)) {
        articulorEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      regalo.push({ id: regaloEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}


function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

function checarStockr(id, cantidad) {
  const productor = productos.find((r) => r.id === id)

  return productor.cantidad - cantidad >= 0
}


export {
  productos,
  regalos,
  pintarProductos,
  pintarRegalos,
  agregarCarrito,
  agregarRegalo
}