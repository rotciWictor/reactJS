import Card from '../components/card'

function Main() {
  return (
    <main>
        <div className="form">
            <div className="inputs">
                <input type="text" className="description" placeholder="Descrição" />
                <input type="date" className="date" placeholder="data"/>
                <input type="text" className="locale" placeholder="Local" />
            </div>
            <div className="buttons">
                <div className="addButton">ADICIONAR</div>
                <div className="clearButton">LIMPAR</div>
            </div>
        </div>
        <div className="showcase">
            <Card />
            <Card />
        </div>
    </main>
  );
}

export default Main;
