import './App.css';
import * as ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App">
      <header cassName="App-header">
        
      </header>
    </div>
  );
}

//ejercicio 1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);

//ejercicio 2

const name= "Nahuel figueroa";
const element = <h1>hello,{name}</h1>;

//ejercicio 3
function formatName(user){
  return user.firstName + "" + user.lastName;
}
const user = {
  firstName : "Nahuel",
  lastName : "Figueroa"
}
const sayName = (
  <h1>
    hello,{formatName(user)}
  </h1>
)

//ejercicio 4

function DecirMiNombre(user){
  if(user){
    return <h2>hello,{formatName(user)}!</h2>;
  }
  return <h2>Hola,Extraño</h2>;
}
 

//ejercicio 5

function tick() {
  const element = (
    <div>
      <h1>La hora es:</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);


//ejercicio 6
const decirLink = <a href="https://www.reactjs.org"> link </a>;
//const decirImg = <img src={}>link</img>; NO SE PONER IMAGENES AUN

//ejercicio 7
function WelcomePeople(props){
  return(
    <h1>hello {props.name}</h1>
  )
}




export default App;