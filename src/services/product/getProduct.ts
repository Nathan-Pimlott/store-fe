import axios from "axios";

// Get a product by it's id
const getProduct = async (id: number) => {
    try {
        // Call the api to get the product by the id
        let productRes = await axios.get(`/api/product/get/${id}`);

        // Return the product data
        return productRes.data.product;
    } catch (error) {
        console.log("Error: ", error);

        throw Error(error);
    }
};

export default getProduct;
