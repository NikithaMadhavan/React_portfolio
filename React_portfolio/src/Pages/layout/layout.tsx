// layout.tsx
import React,{useEffect} from 'react';
import { Outlet ,Link} from 'react-router-dom';
import './layout.css'; // Import your CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';


  const Layout = () => {
  //   const navigate = useNavigate();
  //   const handleBack = () => {
  //     navigate('/')

  //   }

  //   const toForm = () =>{

  //       navigate('/contact')

  //   }
    
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-yellow" data-aos="fade-right" data-aos-duration="2000">
      {/* <nav class="navbar navbar-light" style="background-color: #e3f2fd;"> */}
        <div className="container-fluid">
          {/* Navbar brand */}
          {/* <a className="navbar-brand"  href="#">My Portfolio</a> */}
          <div className="logo">
          <h4><span>My</span> Portfolio</h4>
          </div>
          {/* Navbar links */}
          <div className="menu collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/portfolio"  className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Home</Link>
              {/* <a className="nav-link scroll-link active" href="#home">Home</a> */}
              <a className="nav-link scroll-link active" href="#about">About</a>
              <a className="nav-link scroll-link active" href="#skills">Skills</a>
              <a className="nav-link scroll-link active" href="#education">Education</a>
              <a className="nav-link scroll-link active" href="#projects">Projects</a>
              {/* <a className="nav-link" href="/contact">Contact</a> */}
              <Link to="/contact" className="c-btn ms-4 py-2 px-4 rounded-pill d-none d-md-block">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Render child routes */}
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
