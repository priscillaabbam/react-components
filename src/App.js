import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
import { Input } from "./components/Input";
import { Myself } from "./components/Myself";
import { Counter } from "./components/Counter";

function App() {
  return (
  <div className="App">
    <Navbar />
    <Paragraph />
    <Input  />
    <Myself name="Priscilla" age={19} gender="female"  />
    <Myself name="Rose" age={22} gender="female"  />
    <Myself name="Emmanuel" age={17} gender="male"  />
    <Myself name="William" age={25} gender="male"  />
    <Myself name="Grace" age={20} gender="female"  />
    <Counter />

    </div>
 );
}

export default App;
