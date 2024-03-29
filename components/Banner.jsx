import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Banner = ({ banner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <h1>LARGE TEXT</h1>
        <img src="" alt="headphones" className="hero-banner-image" />

        <div>
          <Link href="./product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner