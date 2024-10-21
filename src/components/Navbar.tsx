import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Store" className="navbar-link">Catálogo</Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/contacto" className="navbar-link">Contacto</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
