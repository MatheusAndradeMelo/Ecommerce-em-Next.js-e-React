import React from 'react'
import { Product, FooterBanner, Banner } from '../components'

const Home = () => {
  return (
    <>
      <Banner />

      <div className="products-heading">
        <h2>Produtos Mais Vendidos</h2>
        <p>Temos muitas variedades</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home