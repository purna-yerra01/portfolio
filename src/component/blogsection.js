import React from "react";
import BlogCard  from "./blogcards";
function Blogsection() {
    const Blogs =[

        {
            id:"1",
            title:"blog 1", 
            imageUrl:"../assets/p1.jpeg",
            excerpt:"This is my blog about....",
        },
        
        {       
                id:"2",
                title:"blog 2",
                imageUrl:"../assets/p2.jpeg",
                excerpt:"This is my blog about....",
        },
           
        {
                id:"3",
                title:"blog 3",
                imageUrl:"../assets/p3.jpeg",
                excerpt:"This is my blog about....",
        },
            
    ];
       

    return (
        <div className="container my-5 text-center">
        <h1 className="font-weight-light ">
                <span className="text-info">Blogs </span>section
            </h1>
             <div className="lead pb-5">I build blogs just like this website</div>
             <div className="row my-5 pt-3">
                {Blogs.map((blog)  =>(
                    <div key={blog.id}className="col col-md-4 my-2">
                    <BlogCard
                    title={blog.title}
                    excerpt={blog.excerpt}
                    imageUrl={blog.imageUrl}
                    />
                </div>   
            
                 ) )
       }    
                </div>
          <div className="my-5">
            <a href="/" className="text-dark text-right">
                <h5>
                    see my Blogs
                <i className="fas fa-arrow-right align-middle "></i>
                </h5>
            </a>
          </div>     
    </div>
    );
}
export default Blogsection;