import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';


const Login = () => {
    const history=useNavigate()
    const [data,setdata]=useState({
        useremail:'',
        userpass:''
    });
    // console.log(data)
    const eventchange=(e)=>{
    const {value,name}=e.target  //for target the onchange value 
    setdata(()=>{
        return{
        ...data, 
        [name]:value
    }
    })
    }
    const eventsubmit=(e)=>{
        e.preventDefault();
        const getdata= JSON.parse(localStorage.getItem("UserDeatils"))
        // const catchdata=JSON.parse(localStorage.getItem("users"))
        // console.log(catchdata)
            const {useremail,userpass}=data
            if(useremail ==="" || userpass===""){
                toast.error("Fill the deatils",{
                   position:"top-center"
                })
            }
            else if(getdata.email!== useremail || getdata.password!==userpass){
                toast.error("Fill the valid Deatils",{
                    position: "top-center",
                })
            }
            // else if(getdata.email===""||getdata.password===""){
            //     // alert("data not faund")
            //     console.log("invalid")
            // }
            else if(getdata.email=== useremail || getdata.password===userpass){
                localStorage.setItem("users", JSON.stringify(data)) 
                history("/Todo")
            }
           
    }
    return (
        <>
        
         <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 col-12'>
                    <div className='loginform-control'>
                        <div className="loginform-data">
                            <h1>Login</h1>
                            <form className="loginform-method">
                                <div className='box'>
                                <label className='input'>Enter Email</label><br/>
                             <input type={"email" }name="useremail" onChange={eventchange} placeholder='Enter Email'/>
                             </div>
                             <div className='box'>
                                <label className='input'>Enter Password</label><br/>
                             <input type={"password"} name="userpass" onChange={eventchange} placeholder='Entere Password'/>
                             </div>
                             {/* <div className="submit">
                             <input type={"submit"} onClick={eventsubmit} className="submit-form"/>
                             </div> */}
                             </form>
                             <input type={"submit"} onClick={eventsubmit} className="submit-form"/>
                        
                        </div>
                        </div>
                </div>
            </div>
            <ToastContainer/>
         </div>
        </>
    );
}

export default Login;
