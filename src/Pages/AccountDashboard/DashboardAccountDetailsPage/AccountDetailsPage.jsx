import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hoocks/UseAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";


const AccountDetailsPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const axiosSecure= useAxiosSecure();
    const {user} = useContext(AuthContext)




    const {data: userData} = useQuery({
        queryKey: ['usersData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersData/${user?.email}`);
            return res.data;
        }
    })
    console.log(userData)


    const onSubmit = (data) => {
       
       
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-8">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Your Name<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl" defaultValue={userData?.name || ''}
                     {...register("name", { required: true })}/>
                    {errors.name && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Display Name<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl" defaultValue={userData?.displayName || ''}
                    {...register("displayName", { required: true })}/>
                     {errors.displayName && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Email<span className="text-red-500">*</span></label>
                    <input type="email"  className="border p-2 rounded-xl" defaultValue={userData?.email || ''}
                    {...register("accountEmail", { required: true })}/>
                     {errors.accountEmail && <span className="text-red-600">This field is required</span>}
                </div>
               <div className="bg-green-500 w-36 p-2 rounded-xl mt-5">
                <button className="text-xl font-bold text-white">Save changes</button>
               </div>
            </form>
        </div>
    );
};

export default AccountDetailsPage;