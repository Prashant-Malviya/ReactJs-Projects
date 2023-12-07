import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name,setName] = useState('Prashant');
  

  // function changeHandler(event) {
  //   setText(event.target.value);
  //   console.log(text);
  // }
  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  // variation 1 : every render
  // useEffect(() => {
  //   console.log("ui rendering done")
  // })

  // variation 2 : first render
  // useEffect(()=>{
  //   console.log("ui rendering done");
  // },[]);

  // variation 3: whenever dependency changes
  // useEffect(() => {
  //   console.log("change observed");
  // }, [text]);

  // variation 4 : first render + whenever dependency changes 

  // useEffect(() => {
  //   console.log("change observed");
  // }, [name]);

  // variation 5 : to handle unmounting of a component

  // useEffect(()=>{
  //   console.log("Event listner added");

  //   return ( () => console.log("Listner removed")
  //   )
  // },[text]);

  // homwork task : to know window size

  const [size,setSize] = useState(window.innerWidth);
  console.log(size);

  
  useEffect(()=>{
    setSize(window.innerWidth);
    console.log(size);
    
    input.value = size;
  },[size]);
  

  return (
    <>
      <input id="input" type="text" onChange={changeHandler} />
    </>
  );
}

export default App;
