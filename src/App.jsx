import './styles.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MoviesGrid from "./components/MoviesGrid.jsx";

function App() {

  return (
      <div>
          <div className="container">
              <Header />
              <MoviesGrid />
          </div>
          <Footer />
      </div>
  )
}

export default App
