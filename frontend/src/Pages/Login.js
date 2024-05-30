import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import login from './login.jpg';
import signin from './signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {
  const [showPassword,setShowPassword]=useState(false)
  const [data,setData] = useState({
    email : "",
    password : ""
})
console.log(data)
// const navigate = useNavigate()
// const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)

const handleOnChange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
}


// const handleSubmit = async(e) =>{
//     e.preventDefault()

//     const dataResponse = await fetch(SummaryApi.signIn.url,{
//         method : SummaryApi.signIn.method,
//         credentials : 'include',
//         headers : {
//             "content-type" : "application/json"
//         },
//         body : JSON.stringify(data)
//     })

//     const dataApi = await dataResponse.json()

//     if(dataApi.success){
//         toast.success(dataApi.message)
//         navigate('/')
//         fetchUserDetails()
//         fetchUserAddToCart()
//     }

//     if(dataApi.error){
//         toast.error(dataApi.message)
//     }

// }

// console.log("data login",data)
  return (
    <section id="login">
       
    <div class="grid min-h-screen grid-cols-2 px-10 py-10 bottom-5 rounded-s-full">
      
      <div class=' rounded-3xl bg-slate-100'>
        <img src={login} alt="logo"  className=" rounded-3xl left-1 h-full w-full"/>
      </div>
    
      <div class='rounded-3xl bg-white p-2 py-5 w-full  mx-auto'>
        <div class=" w-20 h-20 mx-auto">
          <img src={signin} alt="logo"  className=" flex items-baseline left-4 rounded-3xl  h-20 w-20"/>
          
        </div>
        <div className='mx-auto container p-4'>

            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    

                    <form className='pt-6 flex flex-col gap-2' >
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='Enter email' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                    required/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Enter password'
                                    required
                                    name='password' 
                                    value={data.password}
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                    </form>

                    <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
            </div>


        </div>
    </div>
    </div>
    
  </section>
  
  )
}

export default Login