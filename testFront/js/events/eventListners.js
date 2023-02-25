import  {generateRecord} from '../utils/generateRecord.js'
import {sendRequest}  from "../request/requestHandler.js"
// start listening to user events
function startListnening() {
    document.addEventListener("DOMContentLoaded",function () {
        const nofollow= ["script"]
        const doFollow = ["a","button"]
        let body = document.querySelectorAll("body *")
        body.forEach(node => {
             if(nofollow.indexOf(node.tagName.toLocaleLowerCase()) <= -1 && 
             doFollow.indexOf(node.tagName.toLocaleLowerCase()) >= 0) {
                // console.log(node.tagName.toLocaleLowerCase() )
                addListeners(node)
             }
        });
     
      function addListeners(htmlTag) {
         htmlTag.addEventListener("click", handleClick);
         htmlTag.addEventListener("mouseenter", handleMouseEnter);
         htmlTag.addEventListener("mouseleave", handleMouseLeave);
        // document.addEventListener("mousemove", handleMouseMove);
       }
       
       function handleClick(event) {
          
         console.log(generateRecord(event,'Clicked') )
         sendRequest(generateRecord(event,'Clicked'))
       }
       
       function handleMouseEnter(event) {
         console.log(generateRecord(event,'Mouse entered'))
         sendRequest(generateRecord(event,'Mouse entered'))
       }
       
       function handleMouseLeave(event) {
         console.log(generateRecord(event, 'Mouse left'))
         sendRequest(generateRecord(event,'Mouse left'))
      
       }
       
     })
}


export {startListnening} 