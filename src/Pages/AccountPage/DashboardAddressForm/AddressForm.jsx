import { useForm } from "react-hook-form";


const AddressForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data) => {
       
       
        console.log(data)
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold">Billing Address</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-8">
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Your Name<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl"
                     {...register("name", { required: true })}/>
                    {errors.name && <span className="text-red-600">This field is required</span>}
                </div>
               
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Email<span className="text-red-500">*</span></label>
                    <input type="email"  className="border p-2 rounded-xl"
                    {...register("accountEmail", { required: true })}/>
                     {errors.accountEmail && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Company Name (optional) </label>
                    <input type="email"  className="border p-2 rounded-xl"
                    {...register("companyName", { required: false })}/>
                     
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Country<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl"
                    {...register("country", { required: true })}/>
                     {errors.country && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Street address<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl"
                    placeholder="House number"
                    {...register("streetAddress", { required: true })}/>
                     {errors.streetAddress && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Town<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl"
                    {...register("town", { required: true })}/>
                     {errors.town && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">City<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl"
                    {...register("city", { required: true })}/>
                     {errors.city && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Zip Code<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl"
                    {...register("zipCode", { required: true })}/>
                     {errors.zipCode && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-bold">Phone Number<span className="text-red-500">*</span></label>
                    <input type="text"  className="border p-2 rounded-xl"
                    {...register("phone", { required: true })}/>
                     {errors.phone && <span className="text-red-600">This field is required</span>}
                </div>

                
                
               <div className="bg-green-500 w-36 p-2 rounded-xl mt-5">
                <button className="text-xl font-bold text-white">Save changes</button>
               </div>
            </form>
        </div>
    );
};

export default AddressForm;