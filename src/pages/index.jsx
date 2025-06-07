import React, { useEffect, useState } from "react"; 
import "../css/index.css";
export default function Home(){
    const count = ["c", "+", "-", "/", "%", 9, 8, 7, "*", 6, 5, 4, "-", 3, 2, 1,".",0,"r","=",];
    const [val,setVal] = useState("");
    useEffect(function(){
      setVal("Calculator");
      setTimeout(() => {
        setVal("")
      }, 3000);
    },[])
    const handleClick = (item)=>{
         setVal(perv => perv + item)
        if(item === "c"){
           setVal("")
        //    this for the clearing the value 
        }
        else if (item === "r"){
           setVal(prev => prev.slice(0,-1));
        }
        else if (item === "="){
           try{
             const result = eval(val);
             setVal(result.toString())
             console.log(result)
           }catch(error){
             setVal("Error");
             setTimeout(() => setVal(""),2500);
           }
        }
        else{
            if(["+","-","*","/","%"].includes(item)){
              const lastchar = val.slice(-1);
            if(["+","-","*","/","%"].includes(lastchar)){
               return;
            }
          }
        }
    }
    
   return(
    <>
      <main className="full center">
          <div className="t-cover">
             <div className="inval center">
                 <input type="text" value={val}/>
             </div>
             <div className="btn center">
                 {count.map((item,i)=>{
                    return(
                        <>
                         <div onClick={()=>handleClick(item)} className="holder center">
                             <h1>{item}</h1>
                         </div>
                        </>
                    )
                 })}
             </div>
          </div>  
      </main>
    </>
   )
}