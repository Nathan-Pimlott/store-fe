import axios from "axios";

// Get a product by it's id
const getProduct = async (id: number) => {
    try {
        // Call the api to get the product by the id
        let productRes = await axios.post(
            `http://localhost:3000/api/product/get/${id}`,
            {
                id
            }
        );

        console.log('Product Res: ', productRes);
        
        // Return the product data
        return productRes.data
    } catch (error) {
        throw Error(error);
    }
}

export default getProduct;