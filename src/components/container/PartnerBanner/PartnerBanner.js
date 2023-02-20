import React from 'react';
import './PartnerBanner.scss';
import Logo from './assets/partnerLogos/prgh-dark-main.svg';

function PartnerBanner() {
  const banners = Array(10).fill({ name: "PRGH", src: Logo });

  return (
    <div className='PartnerBanner'>
      <div>
        {banners.map((b, i) => <img key={i} src={b.src} alt={b.name} />)}
      </div>
    </div>
  )
}

export default PartnerBanner;
