import logo from './logo.svg';
import './App.css';
import HelloWorld from'./components/HelloWorld'
import List from'./components/pays/Liste'


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Hello {props.client} !
        <HelloWorld client = "client"/>
        <List/>
      </header>
      
      
    </div>
    
    );
}

export default App;
