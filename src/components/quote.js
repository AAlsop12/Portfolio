import React from "react";



export const Quotes = (list) => {
    return (
        <div>
            {list.map(function(element){
            console.log(element)
            setTimeout((element) => {console.log("HHEHEHEHEHEH")}, 4000);
            
            
            })}


        </div>
    )

}


