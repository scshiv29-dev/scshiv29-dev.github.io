import { log } from "console";
import React from "react";

const  Scroll = () =>{
    const scroll = (e) =>{

        
        if(e.wheelDeltaY > 0){
            console.log("up");
            window.scrollTo(0,document.getElementById("hero")?.getBoundingClientRect().y)


        }
        else {
            console.log("down");
            window.scrollTo(0, document.getElementById("project")?.getBoundingClientRect().y)

        }
    }
if(process.browser){

    const body = document.querySelector("body");
    body.onwheel = scroll 
}
return(
    <></>
)
}
export default Scroll