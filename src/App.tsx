import { Routes, Route } from "react-router-dom";

// Components
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar"

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";

function App() {

  return (
  <>
  <Navbar />
  <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Container>
  </>
  )

}

export default App;
