import React from 'react';

function Banner() {
  return (
    <header
      className="banner"
      // style={{
      //   backgroundSize: 'cover',
      //   backgroundImage: 'url("https://wallpaperaccess.com/full/2090218.jpg")',
      //   backgroundPosition: 'center',
      // }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          Welcome to BookMySalon
        </h1>
      </div>
      <div className="banner__fadeBottom" />

    </header>
  );
}

export default Banner;
