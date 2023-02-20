import React from 'react'
import './PartnerBanner.scss'
import Logo from './assets/partnerLogos/prgh-dark-main.svg';
//this method gonna leads to so many imports so this is the right method?

function PartnerBanner() {
  const BANNERS = Array(10).fill({ name: "PRGH", src: Logo })  //dev version to add multiple logos

  return (
    <div className='PartnerBanner'>
      <div>
        <img alt="start" />
        {BANNERS.map((b, i) => <img key={i} src={b.src} alt={b.name} />)}
        <img alt="end" />
      </div>
    </div>
  )
}

export default PartnerBanner
