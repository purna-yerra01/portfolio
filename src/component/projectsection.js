import React from "react";
import ProjectCard from "./projectcards";
function Projectsection() {
    const projects =[

        {
            id:"1",
            title:"Project 1", 
            imageUrl:"../assets/p1.jpeg",
            excerpt:"This is my project about....",
        },
        
        {       
                id:"2",
                title:"Project 2",
                imageUrl:"../assets/p2.jpeg",
                excerpt:"This is my project about....",
        },
           
        {
                id:"3",
                title:"Project 3",
                imageUrl:"../assets/p3.jpeg",
                excerpt:"This is my project about....",
        },
            
    ];
       

    return (
        <div className="container my-5 text-center">
        <h1 className="font-weight-light ">
                <span className="text-info">Project </span>section
            </h1>
             <div className="lead pb-5">I build projects just like this website</div>
             <div className="row my-5 pt-3">
                {projects.map((project)  =>(
                    <div key={project.id}className="col col-md-4 my-2">
                    <ProjectCard
                    title={project.title}
                    excerpt={project.excerpt}
                    imageUrl={project.imageUrl}
                    />
                </div>   
            
                 ) )
       }    
                </div>
          <div className="my-5">
            <a href="/" className="text-dark text-right">
                <h5>
                    see my projects
                <i className="fas fa-arrow-right align-middle "></i>
                </h5>
            </a>
          </div>     
    </div>
    );
}
export default Projectsection;