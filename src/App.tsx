import "./App.css";
import { Nav } from "./components/nav";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full h-full">
        <Nav />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
