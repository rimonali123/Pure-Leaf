import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hoocks/UseAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const ShippingAddressForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext)


    const { data: userData } = useQuery({
        queryKey: ['usersData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersData/${user?.email}`);
            return res.data;
        }
    })
    // console.log(userData)



    const onSubmit = (data) => {
        const userInfo = {
            name: data.name || userData?.name,
            email: userData?.email,
            displayName: data.displayName || userData?.displayName,
            country: data.country || userData?.country,
            companyName: data.companyName || userData?.companyName,
            streetAddress: data.streetAddress || userData?.streetAddress,
            city: data.city || userData?.city,
            town: data.town || userData?.town,
            zipCode: data.zipCode || userData?.zipCode,
            phoneNumber: data.phoneNumber || userData?.phoneNumber,


        }


        console.log(userInfo)
        console.log(data)
    }


    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold">Shipping Address</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-8">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Your Name<span className="text-red-500">*</span></label>
                    <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.name || ''}
                        {...register("name", { required: true })} />
                    {errors.name && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Email<span className="text-red-500">*</span></label>
                    <input type="email" className="border p-2 rounded-xl" readOnly defaultValue={userData?.email || ''}
                        {...register("email", { required: false })} />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Company Name (optional) </label>
                    <input type="email" className="border p-2 rounded-xl" defaultValue={userData?.companyName || ''}
                        {...register("companyName", { required: false })} />

                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Country<span className="text-red-500">*</span></label>
                    <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.country || ''}
                        {...register("country", { required: true })} />
                    {errors.country && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Street address<span className="text-red-500">*</span></label>
                    <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.streetAddress || ''}
                        placeholder="House number"
                        {...register("streetAddress", { required: true })} />
                    {errors.streetAddress && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Town<span className="text-red-500">*</span></label>
                    <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.town || ''}
                        {...register("town", { required: true })} />
                    {errors.town && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">City<span className="text-red-500">*</span></label>
                    <input type="text" className="border p-2 rounded-xl" defaultValue={userData?.city || ''}
                        {...register("city", { required: true })} />
                    {errors.city && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Zip Code<span className="text-red-500">*</span></label>
                    <input type="number" className="border p-2 rounded-xl" defaultValue={userData?.zipCode || ''}
                        {...register("zipCode", { required: true })} />
                    {errors.zipCode && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Phone Number<span className="text-red-500">*</span></label>
                    <input type="number" className="border p-2 rounded-xl" defaultValue={userData?.phoneNumber || ''}
                        {...register("phoneNumber", { required: true })} />
                    {errors.phoneNumber && <span className="text-red-600">This field is required</span>}
                </div>



                <div className="bg-green-500 w-36 p-2 rounded-xl mt-5">
                    <button className="text-xl font-bold text-white">Save changes</button>
                </div>
            </form>
        </div>
    );
};

export default ShippingAddressForm;