import React from 'react';
import logo from './assets/comp-name.png';

function HeadLogo() {
  return (
    <>
      <div className='p-2'>
        <img src={logo} height={'104px'} width={'140px'} alt="Head Logo" />
      </div>
    </>
  );
}

export default HeadLogo;
