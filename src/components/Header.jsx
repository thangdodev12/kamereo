import React from 'react';
import DropDown from '../commons/DropDown';
import HeaderStyle from './HeaderStyle';

const Header = () => {
  const toggleMenu = (e) => {
    const parentNode = e.currentTarget.parentNode;
    const classList = parentNode.classList;
    const bodyContent = document.getElementsByClassName('body')[0];
    const body = document.getElementsByTagName('body')[0];
    if (classList.value.includes('active')) {
      classList.remove('active');
      bodyContent.classList.remove('active');
      body.classList.remove('fixed');
    } else {
      classList.add('active');
      bodyContent.classList.add('active');
      body.classList.add('fixed');
    }
  }

  return (
    <HeaderStyle>
      <div className="left-block">
        <span></span>
        <h1 className="company-name">KAMEREO</h1>
      </div>
      <button className="icon-toggle-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="right-block">
        <div className="info-item">
          <p className="info">
            <img src='./images/avatar.jpeg' alt="avatar" />
            <span className="name">Takutanaka</span>
            <span className="title">Adminstrator</span>
          </p>
        </div>
        <div className="info-item">
          <DropDown
            className="language"
            options={[
              { value: 'EN', label: 'EN' },
              { value: 'JP', label: 'JP' },
              { value: 'VN', label: 'VN' },
            ]}
          />
        </div>
        <div className="info-item">
          <span className="number">4</span>
          <svg className="icon-cart" aria-hidden="true" data-prefix="fal" data-icon="shopping-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M551.991 64H129.28l-8.329-44.423C118.822 8.226 108.911 0 97.362 0H12C5.373 0 0 5.373 0 12v8c0 6.627 5.373 12 12 12h78.72l69.927 372.946C150.305 416.314 144 431.42 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-17.993-7.435-34.24-19.388-45.868C506.022 391.891 496.76 384 485.328 384H189.28l-12-64h331.381c11.368 0 21.177-7.976 23.496-19.105l43.331-208C578.592 77.991 567.215 64 551.991 64zM240 448c0 17.645-14.355 32-32 32s-32-14.355-32-32 14.355-32 32-32 32 14.355 32 32zm224 32c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32zm38.156-192H171.28l-36-192h406.876l-40 192z"/></svg>
        </div>
        <div className="info-item">
          <svg className="icon-email" aria-hidden="true" data-prefix="fal" data-icon="envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"/></svg>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;