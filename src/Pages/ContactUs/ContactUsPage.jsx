import { useForm } from "react-hook-form";
import GoogleMap from "../../GoogleMap/GoogleMap";
import Swal from "sweetalert2";



const ContactUsPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit  = async (data) => {
        console.log(data)
        console.log('button clicked')
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500
          });
          reset()
          
    }


    
    return (
        <div className="mt-28">
            <h1 className="text-4xl font-medium">Contact Us</h1>
            <div className="mt-10 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <h1 className="text-xl font-bold text-center">Bangladesh</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-center">London</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-center">Singapure</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-center">Moscow</h1>
                        <p className="text-lg text-center">508 Bridle Avenue <br />
                            Newnan, GA 30263 <br />
                            (239) 555-0108</p>
                    </div>
                    <div className="border-l-2 border-black">
                        <h1 className="text-xl font-bold text-center">Opening Hours</h1>
                        <p className="text-lg text-center">The store’s opening hours <br />
                            are 9 a.m. to 6 p.m. </p>
                    </div>
                </div>
            </div>

          
                <div className="bg-slate-100 p-5  w-full">
                    <h1 className="text-xl font-bold">Have any question?</h1>
                    <p>Your email address will not be published. Required fileds are marked*</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-10">

                        <input className="w-full p-3 rounded-lg  " type="text" {...register("name", { required: true })} placeholder="Name*" />
                         {errors.name && <span>This field is required</span>}

                       

                        <input className="w-full p-3 rounded-lg  " type="email" {...register("email", { required: true })} placeholder="Email*" />
                         {errors.email && <span>This field is required</span>}

                       

                        <input className="w-full p-3 rounded-lg  " type="text" {...register("subject", { required: false })} placeholder="Subject" />
                         {errors.subject && <span>This field is required</span>}

                       

                       <textarea className="w-full p-3 rounded-lg  " {...register("message")} name="message" placeholder="type your message" rows={5} id=""></textarea>

                        <div className="w-full text-end">
                            <input className="bg-green-500 p-2 w-44 text-white text-xl rounded-lg " type="submit" value="Submit Message" />
                        </div>
                    </form>
                </div>

                

            
            <div>
                    <GoogleMap></GoogleMap>
                </div>
        </div>
    );
};

export default ContactUsPage;