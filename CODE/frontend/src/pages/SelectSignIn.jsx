import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StudentLogin from './student/StudentLogin';
import FacultyLogin from './faculty/FacultyLogin';
import AdminLogin from './admin/AdminLogin';

const SelectSignIn = () => {
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
<div className="box" onClick={()=>clickLogin("admin")}>
<img src="/admin.png" alt="" className='diagram'/>

<h3 className='titles'><Link to="/login"  className=' text-decoration-none text-white'>Admin</Link> </h3>
</div>
<h3 className='singup'>No account?<Link to="/selectRegister"  className=' text-decoration-none text-white'>Sign Up</Link></h3>
</div>
  </div>}
  {showLogin==="student"&&<StudentLogin/>} 
  {
    showLogin==="faculty"&&<FacultyLogin/>
  }
  {
    showLogin==="admin"&&<AdminLogin/>
  }
  
    </div>
  )
}

export default SelectSignIn