import React from "react";
function Footer() {
return(
    <footer>
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
        <div className="py-5">
            
                <h2 className="text-light">Intrested in working with me</h2>
                <button className="btn btn-outline-light btn-lg">lets talk</button>
            
        </div>
        <div className="row">
            <div className="col-12 col-md-4 py-3">
                <h5 className="text-info">More links</h5>
                <a href="/" className="text-light d-block">Blogs</a>
                 <a href="/" className="text-light d-block">Home</a>
                 <a href="/" className="text-light d-block">Contact Me</a>
                 <a href="/" className="text-light d-block">Projects</a>
                 <a href="/" className="text-light">Write a recomandation <i className="fas fa-heart text-light"></i> </a>
            </div>
            <div className="col-12 col-md-4 text-light text-justify py-3">
                <p>A web developer is a programmer who develops World Wide Web applications using a client–server model.
                The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server</p>
            </div>
            <div className="col-12 col-md-4 py-3">
                <h5 className="text-info">social</h5>
                <a href="/">
                    <i className="fab fa-linkedin text-light h1 d-block"></i>
                </a>
                <a href="/">
                    <i className="fab fa-github text-light h1 d-block"></i>
                </a>
                <a href="/">
                    <i className="fas fa-envelope text-light h1 d-block"></i>
                </a>
            </div>
        </div>
        
            <div className="text-muted">
                <p>copyrights @ purna yerra 2023</p>
            </div>
    
        </div>
    </footer>
);

}
export default Footer