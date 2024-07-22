import "./App.css";
import { AppBackground } from "./components/app-background";
import { Nav } from "./components/nav";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full h-full">
        <AppBackground />
        <Nav />
      </div>
    </ThemeProvider>
  );
}

export default App;
