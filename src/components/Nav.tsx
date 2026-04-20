export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="brand">
          <b>Cardinal</b>
          &nbsp;
          <span>Principals</span>
        </a>
        <div className="nav-links">
          <a href="#approach">Approach</a>
          <a href="#work">Selected Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </div>
        <a href="#contact" className="nav-cta">
          Book an intro call
          <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  );
}
