//import "./button.css";

function Button(props) {
  return (
    <div className={props.className} id={props.id}>
      {props.innerText}
    </div>
  );
}

export default Button;
