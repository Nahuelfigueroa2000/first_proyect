import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWord name="Lautaro"/>
        <MiNombre edad="20"/>
      </header>
    </div>
  );
}


function HelloWord(props){
  return (
    <div>
      <h1>"Hola Mundo!!"</h1>
      <p>{"Hola " + props.name + " Creo esto"}</p>
    </div>
  );
}

function MiNombre(props){
  return(
    <div>
      <h2>Mi nombre es Nahuel</h2>
      <p>{"Hola, tengo " + props.edad + " años"}</p>
    </div>
  );
}

export default App;
