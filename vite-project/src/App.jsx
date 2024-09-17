import "./App.css";
import Food from "./Components/Food.jsx";
import Person from "./Components/Person.jsx";
function App() {
  return (
    <div>
      <Person />
      <Food foodName={"Apple"} />
      <Food foodName={"Mango"} />
    </div>
  );
}

export default App;
