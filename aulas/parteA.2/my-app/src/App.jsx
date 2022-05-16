import "./App.css";
import profile from "./Group1.png";

function App() {
  return (
    <div className="site">
      <header>
        <div className="header-detail"></div>
        <nav className="site-header">
          <div className="btn" id="btn1">BTN1</div>
          <div className="btn">BTN2</div>
          <div className="btn">BTN3</div>
          <div className="btn">BTN4</div>
        </nav>
        <div className="header-profile">
          <img src={profile}/>
        </div>
      </header>
      <div className="body">
        <div className="page"></div>
      </div>
    </div>
  );
}

export default App;
