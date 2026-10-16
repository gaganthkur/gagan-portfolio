function Navbar({name}) {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a href="#home" className="logo">{name}</a>


        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#porjects">Projects</a></li>
          <li><a href="#eductaion">Education</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
