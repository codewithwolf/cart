
const Product = ({ item }) => {
    const { img, tittle, price } = item;
    return (
        <>
            <div className="h-full w-full">
                <div className=" image_box h-full w-full">
                    <img className="" src={img} alt="Image" />

                </div>
                <div className="">
                    <div className="text-md text-center py-2">{tittle}</div>
                    <hr className=" border-yellow-500 border-2 w-16  text-center mx-auto" />
                    <div className="text-center font-medium my-3">{price}</div>
                    <button className=" bg-black text-white w-full py-2  mt-2 hover:bg-yellow-600 transitin"   >Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Product