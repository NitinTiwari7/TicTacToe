import React from 'react';
import  './FirstPage.css';


const FirstPage =({choice, setChoice, setNewGame})=>{
     const handleClick=(selected)=>{
      setChoice(selected);
    }
   
    const handleNewGame=()=>{
setNewGame(true);
    }
   console.log(choice)
    return(
        <div>
           
            {/* <button className='fr' onClick={()=>handleClick(true)}>X</button>
            <button  onClick={()=>handleClick(false)}>0</button>
            <button onClick={()=>handleNewGame()}>New Game</button> */}




<div className='Body'>
      <div className='Icons'>
        <img src="./Icons/Cross.png" alt="Loading..."  />
        <img src="./Icons/circle.png" alt="Loading..."  />
      </div>
      <div className="Box">
        <h2 className='text'>PICK PLAYER</h2>
        {/* <div className='Input-Box'>
           <div className='left-Input'>  <img src="./Icons/Cross.png" alt="Loading..."  /></div> 
           <div className='right-Input'><img src="./Icons/Circle.png" alt="Loading..."  /></div>
           </div> */}
           <div className='Input-Box'>
    <div className='left-Input'> <button  onClick={()=>handleClick(true)}><img src="./Icons/Cross.png" alt="Loading..."  /></button></div>
<div className='right-Input'> <button  onClick={()=>handleClick(false)}><img src="./Icons/Circle.png" alt="Loading..."  /></button></div>
</div>
      </div>
      <div>  <button onClick={()=>handleNewGame()} className='CPU-btn'> NEW GAME ( VS CPU )</button> </div>

     
      <button className='Human-btn'>NEW GAME ( VS HUMAN ) Coming soon</button>

      <button className='Invite-btn'>Invite your friend</button>



    </div>


            <div >
    
    </div>
           
        </div>
    )
}
export default FirstPage;