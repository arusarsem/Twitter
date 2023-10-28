import React from "react";


function Post({image, name, post}){
    return(
        <div className="mentors">
            <div style = {{backgroundImage: "url(${image})"}}>
                <h1>
                    {name}
                </h1>
                <p>
                    ${field}
                </p>
            </div>
        </div>
    );

}

export default Post;