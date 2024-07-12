import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import FooterDivider from "./FooterDivider";
import Home from "./Home";
import Nav from "./Nav";
import PageDivider from "./PageDivider";
import Projects from "./Projects";
import ScrollToTop from "./ScrollTopBtn";
import Skills from "./Skills";
import Stars from "./Stars";
import TimeLine from "./TimeLine";

function App() {
  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>
      <Nav></Nav>
      <Home></Home>
      <TimeLine></TimeLine>
      <Skills></Skills>
      <PageDivider></PageDivider>
      <About></About>
      <Stars></Stars>
      <Projects></Projects>
      <Contact></Contact>
    <FooterDivider></FooterDivider>
      <Footer></Footer>
    </div>
  );
}

export default App;
