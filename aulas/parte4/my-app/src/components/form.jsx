function Form(props) {
  return (
    <div className="form">
      <div className="inputs">
        <input type="text" className="description" placeholder="Descrição" onInput={(event) => props.setDescription(event.target.value)} />
        <input type="date" className="date" placeholder="data" onInput={(event) => props.setData(event.target.value)}/>
        <input type="text" className="local" placeholder="Local" onInput={(event) => props.setLocal(event.target.value)}/>
      </div>
      <div className="buttons">
        <div className="addButton" onClick={props.handleData}>
          ADICIONAR
        </div>
        <div className="clearButton" onClick={props.clearInput}>
          LIMPAR
        </div>
      </div>
    </div>
  );
}

export default Form;
