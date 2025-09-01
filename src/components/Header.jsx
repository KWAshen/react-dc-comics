import React from 'react'

const Header = () => {
  const menu =[
  {
    id:1,
    label: "Characters",
    active: false,
    href:"#"
  },
  {
    id:2,
    label: "Comics",
    active: true,
    href:"#"
  },
  {
    id:3,
    label: "Movies",
    active: false,
    href:"#"
  },
  {
    id:4,
    label: "Tv",
    active: false,
    href:"#"
  },
  {
    id:5,
    label: "Games",
    active: false,
    href:"#"
  },
  {
    id:6,
    label: "COLLECTIBLES",
    active: false,
    href:"#"
  },
  {
    id:7,
    label: "VIDEOS",
    active: false,
    href:"#"
  },
  {
    id:8,
    label: "FANS",
    active: false,
    href:"#"
  },
  {
    id:9,
    label: "NEWS",
    active: false,
    href:"#"
  },
  {
    id:10,
    label: "SHOP",
    active: false,
    href:"#"
  },
  
]
  return <Header>
    <div className="Container">
      <div className="row ">
        <div className="col-25">
        <div id="logo-header"><img src="./img/dc-logo.png" alt="DC Comics" /></div>
        </div>
        <div className="col-75">
          <ul id="menu">
            {
              menu.map(link => {
                const {id, href, label, active } = link;
                return(<li key={id} className={active ? 'active' : '' }><a href={href}>{label}</a></li>)
              })}
            
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