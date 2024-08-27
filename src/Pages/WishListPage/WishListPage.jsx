import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hoocks/UseAxiosSecure/useAxiosSecure";
import WishListCart from "./WishListCart";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const WishListPage = () => {
    const {user} = useContext(AuthContext)

    const axiosSecure = useAxiosSecure();

    const { data: wishlistData , refetch} = useQuery({
        queryKey: 'wishListData',
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishListData/${user?.email}`);
            return res.data;
        }
    })

    console.log(wishlistData)
    return (
        <div>
            <h1 className="text-2xl font-bold">WishList</h1>
            {wishlistData?.length ? <>
                {wishlistData?.map(data => <WishListCart key={data._id} data={data} refetch={refetch}></WishListCart>)}
            </> : 'No products were added to the wishlist'}
        </div>
    );
};

export default WishListPage;