//import "./header.css"
import Button from "./button.jsx";

function Header() {
  return (
    <header>
      <div className="header-detail"></div>
      <nav className="site-header">
        <Button className="btn" id="btn1" innerText="Início" />
        <Button className="btn"  innerText="BTN2" />
        <Button className="btn"  innerText="BTN3" />
        <Button className="btn"  innerText="BTN4" />
      </nav>
      <div className="header-profile">
        <img src="./user.png" alt="user"/>
      </div>
    </header>
  );
}

export default Header;
