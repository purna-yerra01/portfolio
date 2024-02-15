import React from 'react'

 function skillset() {
    const Skills=[
        {
            id:1,
            name:"HTML5",
            imageUrl:"data:image/png;base64,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",
            starsTotal:3,
            starsActive:3,
        },
        {
            id:2,
            name:"CSS3",
            imageUrl:"data:image/png;base64,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",
            starsTotal:3,
            starsActive:3,
        },
        {
            id:3,
            name:"Javascript",
            imageUrl:"",
            starsTotal:3,
            starsActive:2,
        },
        {
            id:4,
            name:"Bootstrap 4",
            imageUrl:"",
            starsTotal:3,
            starsActive:1,
        },
        {
            id:5,
            name:"React",
            imageUrl:"",
            starsTotal:3,
            starsActive:2,
        },
        {
            id:6,
            name:"Python",
            imageUrl:"",
            starsTotal:3,
            starsActive:3,
        },
        {
            id:7,
            name:"MySql",
            imageUrl:"",
            starsTotal:3,
            starsActive:2,
        },
        {
            id:8,
            name:"Flask",
            imageUrl:"",
            starsTotal:3,
            starsActive:2,
        },
    ];
    const finalSkillRow=[];
    for(let i=0;i<2;i++){
        let SkillRow=Skills.slice(i*4,(i+1)*4);
        <div class="d-flex justify-content-around py-3">
            {
                SkillRow.map(Skills)=>(
                    <Skills.skills={kills}

                )
            }
            </div>
    }



  return (
    <div className="class bg-light w-100">
        <div className="container text-center py-5">
            <h1 className="font-weight-light ">
                <span className="text-info">Technology</span>stack
            </h1>
            <div className="lead pb-5">I design,develop,deliver with these weapons</div>
            <div className="d-flex justify-content-around py-3"></div>
    </div>
    </div>
  );
}
export default skillset;
