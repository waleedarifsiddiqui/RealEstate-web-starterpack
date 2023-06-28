import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />

        <Header />

        <About />
      </div>
      {/* <Carousel /> */}
      <Blog />
    </div>
  );
}

export default App;
