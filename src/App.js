import logo from './logo.svg';
import './App.css';
import TaskList from './components/container/Task_List';
import Contact from './components/container/Contact';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>

      <TaskList />
      <Contact />
    </div>
  );
}

export default App;
