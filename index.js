import React from "react";
import ReactDOM from "react-dom";
import App from"./components/App"

 var count=0;


 function increae (){
count++
   console.log(count);
 }
ReactDOM.render(
  <div className='container'>
    <h1>{count}<h1/>
    <button onClick={increase} >+<button/>
    </div>
   document.getElementbyId("root") 
);
