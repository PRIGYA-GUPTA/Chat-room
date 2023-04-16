import React from 'react'
import {Route,Routes,Link} from 'react-router-dom';
import "./App.css";
export default function Home() {
  return (
  
<>
 <div className='entrypoint'>
 <img id = "groupimg" src="https://img.freepik.com/free-vector/group-discussion-concept-illustration_114360-8572.jpg?w=740&t=st=1681149344~exp=1681149944~hmac=7023d19d2521fe29e47ad7ab632caafc72f5cf5daabb9a71ef4b7b4838c76ede"></img>
 <div className='paraimg'>

 <p >Do you require a safe environment to chat?<br></br>
We have your back. Enter the chat room and discuss the things in an isolated environment.
</p>

<Link to='/app'><i class="fa-sharp fa-solid fa-comments">Get Started </i>  </Link>
    
 </div>

    </div>
    
    </>
    
  )
}
