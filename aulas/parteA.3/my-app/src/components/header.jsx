import "./header.css";
import user from "../assets/Group1.png";
import Button from "./button.jsx";

function Header() {
  return (
    <header>
      <div className="header-detail"></div>
      <nav className="site-header">
        <Button className="btn" id="btn1" innerText="Início" />
        <Button className="btn" id="" innerText="Btn2" />
        <Button className="btn" id="" innerText="Btn3" />
        <Button className="btn" id="" innerText="Btn4" />
      </nav>
      <div className="header-profile">
        <img src={user} alt="user" srcset="user" />
      </div>
    </header>
  );
}

export default Header;
