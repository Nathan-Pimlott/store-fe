import axios from "axios";

import { IFilterProducts } from "../../types";

// Get a product by filtered values
const getProducts = async (filters: IFilterProducts) => {
    try {
        // Call the api to get the product by the filtered values
        let productRes = await axios.post("/api/product/get", filters);

        console.log("productRes.data: ", productRes.data);

        // Return the product array data
        return productRes.data;
    } catch (error) {
        throw Error(error);
    }
};

export default getProducts;
