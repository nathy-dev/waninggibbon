import "./App.css";
import { AppBackground } from "./components/app-background";
import { Nav } from "./components/nav";

function App() {
  return (
    <div className="w-full h-full">
      <AppBackground />
      <Nav />
    </div>
  );
}

export default App;
