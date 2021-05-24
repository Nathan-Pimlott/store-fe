import axios from "axios";

import { IProduct } from "../../types";

// Create a new product
const createProduct = async (product: IProduct) => {
    try {
        // Call the api to create the product
        let productRes = await axios.post("/api/product/create", product);

        // Return the product array data
        return !!productRes;
    } catch (error) {
        throw Error(error);
    }
};

export default createProduct;
