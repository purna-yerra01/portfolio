import React from 'react'

 function skill(props) {
    const{name ,imageUrl,starsTotal,starsActive}=props.skill;
  return (
    <div>
                    <img  className="rounded-circle" src={imageUrl} alt={name}
                    style="width: 100px; height: 100px;"
                    />
                    <div>
                        <span className="text-info"> &#9733;</span>
                        <span className="text-info"> &#9733;</span>
                        <span className=""> &#9733;</span>
                    </div>
                </div>
  );
}
export default skill;