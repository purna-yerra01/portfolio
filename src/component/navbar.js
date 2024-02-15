import React from "react";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
            <div className="container">
                <a href="/" className="navbar-brand font-weight-bold text-dark">
                    Purna Yerra
                </a>
                <button className="btn btn-outline-info ml-auto">
                    contact me
                </button>
                <button 
                className="navbar-toggler"
                 data-toggle="collapse"
                 data-target="#Collapsenav"
                 >
    
                    <span className="fas fa-bars text-dark"></span>
                </button>
                <div className=" collapse navbar-collapse flex-grow-0" id="Collapsenav">
                    <div className="navbar-nav">
                        <a href="/" className="nav-item nav-link font-weight-bold text-dark h6 mx-3 my-auto">
                            blogs
                        </a>
                        <a href="/" className="nav-item nav-link font-weight-bold text-dark h6 mx-3 my-auto">
                            Projects
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
