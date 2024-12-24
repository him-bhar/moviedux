import './styles.css'
import Header from "./components/Header.jsx";

function App() {

  return (
      <div>
          <div className="container">
              <Header />
          </div>
          <footer className="footer">
              <p className="footer">Footer content here</p>
          </footer>
      </div>
  )
}

export default App
