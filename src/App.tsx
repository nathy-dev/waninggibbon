import "./App.css";
import { Nav } from "./components/nav";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <Home />
    </ThemeProvider>
  );
}

export default App;
