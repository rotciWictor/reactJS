function Card(props) {
    return (
              <div className="card">
                  <h1 className="card-date">{props.date}</h1>
                  <h3 className="card-local">{props.local}</h3>
                  <span className="card-description">{props.description}</span>
                  <span className="close">X</span>
              </div>
    );
  }
  
  export default Card;