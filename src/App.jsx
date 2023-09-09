import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Copyright from "./components/Copyright";
import GoToTopButton from "./components/GoToTopButton";

function App() {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Copyright />
      <GoToTopButton />
    </div>
  );
}

export default App;
