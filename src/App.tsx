import "./App.css";
import { AppBackground } from "./components/app-background";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="w-full h-full">
        <AppBackground />
        <Nav />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
