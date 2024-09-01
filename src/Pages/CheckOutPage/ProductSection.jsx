import PropTypes from 'prop-types';

const ProductSection = ({ cart }) => {
    // console.log(cart)
    return (
        <div>
            <div>

                <div className="flex items-center justify-between">
                    <p className='w-44'>{cart.productName}</p>
                    <img src={cart.productImage} className="w-20 " alt="" />
                    <div className="flex items-center gap-10">
                    <p className='text-lg'>Price :</p>
                    <p className='text-red-500 font-bold'>${cart.productPrice}</p>
                    </div>
                </div>
                    <hr  className='w-full mt-5 border-black opacity-10'/>
            </div>
        </div>
    );
};
ProductSection.propTypes = {
    cart: PropTypes.object.isRequired,
}

export default ProductSection;