import React, { useState } from 'react'
import RegisterStudent from './admin/RegisterStudent';
import RegisterFaculty from './faculty/RegisterFaculty';
import { Link } from 'react-router-dom';

const SelectRegister = () => {
    const [showLogin, setShowLlogin]=useState("home");
    const clickLogin=(elem)=>{
      setShowLlogin(elem)
    }
      return (
        <div>
            {showLogin==="home"&& <div className="main">
    
    <div className="page">
    <Link to="/"><i class="fa-solid fa-angle-left back text-white"></i> </Link>
    {/* <button className='btn-close btn-close-white close-button '></button> */}
    <div className="box" onClick={()=>clickLogin("student")}>
      <img src="/student.png" alt="" className='diagram'/>
      <h3 className='titles'><Link  className=' text-decoration-none text-white'>Student</Link> </h3>
    
    </div>
    <div className="box" onClick={()=>clickLogin("faculty")}>
    <img src="/teacher.png" alt="" className='diagram'/>
    
    
    <h3 className='titles'><Link className=' text-decoration-none text-white'>Faculty</Link> </h3>
    
    </div>
    
    <h3 className='singup'>Already Registered? &nbsp;<Link to="/selectSignIn"  className='btn text-decoration-none text-white'>Sign In</Link></h3>
    </div>
      </div>}
      {showLogin==="student"&&<RegisterStudent/>} 
      {
        showLogin==="faculty"&&<RegisterFaculty/>
      }
     
        </div>
      )
}

export default SelectRegister