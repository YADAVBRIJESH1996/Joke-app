import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [joke,setjoke] = useState("Loding")
  const [fname,setfn] = useState('yadav')
  const [sname,setsn] = useState('john')
  const newjoke = (first,second)=>{
    fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${second}`).then(res=> res.json())
    // console.log(res)
  .then(res1 =>{
    // console.log(res1);
   setjoke(res1.value.joke);
  })
}
 useEffect(()=>{
    newjoke(fname,setfn)
 },[])
  return(
    <div className="App">
     <h3 className='tage'>Yadav Progammar</h3>
     <h1 className='h1'>Jokes App</h1>
     <h2 className='link'>{joke}</h2>
     <input type="text" className='in' value={fname} onChange = {(e)=>setfn(e.target.value)}></input>
     <input type="text" className='in' value={sname} onChange = {(e)=>setsn(e.target.value)}></input>
    <div ><button className='btn' onClick={()=>newjoke(fname,sname)}>Next joke😁</button></div> 
     
    </div>
  );
}

export default App;
