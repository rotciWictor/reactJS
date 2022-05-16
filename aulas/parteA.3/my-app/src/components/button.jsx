import "./button.css";

function Button(props) {
  return (
    <button className={props.className} id={props.id}>
      {props.innerText}
    </button>
  );
}

export default Button;
