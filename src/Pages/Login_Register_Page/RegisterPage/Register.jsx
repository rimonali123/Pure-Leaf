import { useForm } from "react-hook-form"
import img from '../../../assets/login.svg';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import Divider from '@mui/material/Divider';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const onSubmit = (data) => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result?.user);

                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photo
                }).then(() => {
                }).catch((error) => {
                    console.error(error)
                });

                navigate(location?.state ? location?.state : "/")
                toast.success('Registration successfully')
            })
            .catch(error => {
                console.log(error.message)

            })
        console.log(data)
    }

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(result => {
    //             console.log(result?.user);
    //             toast.success('Google Registration successfully');
    //             navigate("/"); 
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             toast.error('Something error');
    //         });
    // };


    return (
        <div className="mt-20 mb-10">
            <div className="w-full p-10 bg-white shadow-2xl flex flex-col lg:flex-row gap-10">
                <div className="w-full">
                    <img className="w-full" src={img} alt="" />
                </div>
                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-xl font-medium">Your Name*</label>
                            <input className="border p-2 w-full rounded-xl " type="text" placeholder="Name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-medium">Email*</label>
                            <input className="border p-2 w-full rounded-xl " type="text" placeholder="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className="flex flex-col ">
                            <label className="text-xl font-medium">Password*</label>
                            <input className="border p-2 w-full rounded-xl " type={showPassword ? "text" : "password"} placeholder="password" {...register("password", { required: true })} />
                            <span className="relative  bottom-7 w-5 left-[630px] md:left-[710px] lg:left-[550px]" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye /> : <FaEyeSlash />
                                }
                            </span>
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-medium">Confirm Password*</label>
                            <input className="border p-2 w-full rounded-xl " type={showConfirmPassword ? "text" : "password"} placeholder="confirm password" {...register("confirmPassword", { required: true })} />
                            <span className="relative  bottom-7 w-5 left-[630px] md:left-[710px] lg:left-[550px]" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {
                                    showConfirmPassword ? <FaEye /> : <FaEyeSlash />
                                }
                            </span>
                            {errors.confirmPassword && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl font-medium">Profile image</label>
                            <fieldset className="w-full space-y-1 dark:text-gray-800">
                               
                                <div className="flex mt-2">
                                    <input type="file" name="files" id="files" className=" border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100" />
                                </div>
                            </fieldset>

                        </div>

                        <div className="mt-5 text-xl font-medium">
                            <h1 className="mb-5">Please Select Your Account type</h1>
                            <select {...register("accountType", { required: true })} className="border-2 border-red-400 p-4 px-12">
                               
                                <option value="user">User</option>
                                <option value="seller">Seller</option>
                            </select>
                            {errors.accountType && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="flex gap-2 mt-5 text-xl font-semibold">
                            <input type="checkbox" name="" id="" {...register("checkbox", { required: true })} />
                            <p>Read Our Terms & Conditions.</p>
                        </div>
                        {errors.checkbox && <span className="text-red-600">This field is required</span>}
                        <button className="text-xl font-bold border p-2 rounded-xl text-white bg-green-600 mt-5 w-full hover:text-2xl">
                            Create Account
                        </button>
                    </form>
                    <div className="mt-5 b">
                        <div>
                            <Divider className="text-3xl font-bold">OR</Divider>
                        </div>
                        <div className="flex justify-between">
                            <button className="text-3xl font-semibold flex gap-2 items-center hover:text-4xl hover:text-green-600"><span><FcGoogle /></span>Google Login</button>
                            <button className="text-3xl font-semibold flex gap-2 items-center hover:text-4xl hover:text-green-600"><span><FaGithub /></span>Github Login</button>

                        </div>
                        <h2 className="text-xl mt-10">Already have an account? please <span className="underline text-green-500 font-bold hover:text-2xl"><Link to="/loginPage">Login</Link></span></h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;