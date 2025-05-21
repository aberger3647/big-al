import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import {
  Nav,
  Home,
  About,
  Services,
  Rates,
  Blog,
  Testimonials,
  Footer,
} from "./components";
import "./App.css";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/footer" element={<Footer />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
