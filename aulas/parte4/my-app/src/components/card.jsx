function Card(props) {
    return (
              <div className="card">
                  <h1 className="card-date">{props.date}</h1>
                  <span className="card-local">{props.local}</span>
                  <h2 className="card-description">{props.description}</h2>
                  <span className="close">X</span>
              </div>
    );
  }
  
  export default Card;