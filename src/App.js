import "./App.css";
import Progress from "./components/progress/Progress";

function App() {
  return (
    <div className="App">
      <Progress width="36" />
      <Progress width="94" />
      <Progress width="12" />
      <Progress width="50" />
      <Progress width="78" />
    </div>
  );
}

export default App;
