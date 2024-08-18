import { Link } from "react-router-dom";


const DashboardAddressPage = () => {
    return (
        <div>
            <h3 className=" p-4">The following addresses will be used on the checkout page by default.</h3>
            <div className="flex gap-5 items-center w-full">
                <div className="w-full border">
                    <div className="flex justify-between items-center bg-slate-50 border">
                        <h4 className="bg-slate-100 text-xl font-semibold p-4">Billing address</h4>
                       <Link to="/accountPage/addressPage/billingAddressEdit"> <button className="p-4 hover:text-green-500">Add</button></Link>
                    </div>
                    <p className="text-center py-4">You have not set up this type of address yet.</p>
                </div>

                <div className="w-full border">
                    <div className="flex justify-between items-center bg-slate-50 border">
                        <h4 className="bg-slate-100 text-xl font-semibold p-4">Shipping address</h4>
                        <Link to="/accountPage/addressPage/shippingAddressEdit"> <button className="p-4 hover:text-green-500">Add</button></Link>
                    </div>
                    <p className="text-center py-4">You have not set up this type of address yet.</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardAddressPage;