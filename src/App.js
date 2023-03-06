import React,{Component} from "react";
import {BrowserRouter as Router , Route , Routes } from "react-router-dom";
import {NavBar} from "./components/Navbar/NavBar.js";
import {Home} from "./components/pages/home/Home.js";
import {Courses} from "./components/pages/courses/Courses.js";
import {Blog} from "./components/pages/blog/Blog.js";
import Login from "./components/pages/login/Login.js";
import {About} from "./components/pages/about/About.js";
import {Footer} from "./components/footer/Footer.js";
export class Lconponent extends Component {
  render(){
  return(
    <div>
      <Router>
      <NavBar />
      <Routes>

      <Route path="/" element={ <Home />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/blog" element={ <Blog />} />
      <Route path="/courses" element={ <Courses />} />
      <Route path="/about" element={ <About />} />
       </Routes>
      <div>
        <Footer />
      </div>
   </Router>
   </div>
  );
}
}
export default Lconponent;
