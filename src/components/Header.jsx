import React from 'react'

const Header = () => {
  return <Header>
    <div className="Container">
      <div className="row">
        <div className="col-50">
        <div id="logo-header"><img src="./img/dc-logo.png" alt="DC Comics" /></div>
        </div>
        <div className="col-50">
          <ul id="menu">
            <li><a href="#"></a>CHARACTERS</li>
            <li className="active"><a href="#"></a>COMICS</li>
            <li><a href="#">MOVIES</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">GAMES</a></li>
            <li><a href="#">COLLECTIBLES</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">FANS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SHOP</a></li>
          </ul>
        </div>
      </div>
    </div>
  </Header>;
};

export default Header;