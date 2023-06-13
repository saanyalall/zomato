import React, { useEffect, useState } from 'react'
import Food from './Food'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'


function Search() {

    const[Fdata,setFdata]=useState(Food);

    const [copyData,setCopyData]=useState();


    const chanegData=(e)=>{
      
      let getchangedata=e.toLowerCase();
      if(getchangedata == " "){
        setCopyData(Fdata);
      }
      else{
        let storedata=copyData.filter((ele,k)=>{
          return ele.rname.toLowerCase().match(getchangedata);
        });
        setCopyData(storedata)
      }
    }
   
    useEffect(()=>{

      setTimeout(()=>{
        setCopyData(Food)
      },2000);
    
    },[])

  
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

  return (
    <>
    <div className=' conatiner d-flex justify-content-between align-items-center'>
     <img src={zomatologo} style={{width:"8rem",position:"relative",left:"2%",cursor:"pointer", backgroundColor:"red"}}/>
     <h2 style={{color:"blue",cursor:"pointer"}} className='mt-3'>Search filter app</h2>  
    </div>
   

    <Form className='d-flex justify-content-center align-items-center mt-4'>
      <Form.Group className="mg-2 col-lg-4" controlId="formBasicEmail"> 
        <Form.Control type="text" onChange={(e)=>chanegData(e.target.value)} placeholder='search a restaurant'/>
      </Form.Group>
      <button className='btn text-light col-lg-1' style={{background:"#de5757",marginLeft:"13px"}}>submit</button>
      </Form>
   
    <div className='row mt-3 d-flex justify-content-between align-items-center'>
     {copyData && copyData.length ? <Cards data= {copyData}/>:<Set sdata={Fdata}/> } 
    </div>

     
    </>

  )
}

export default Search;