import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "../src/pages/Mainpage";
import About from '../src/pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App