import axios from "axios";

import { IFilterProducts } from "../../types";

// Get a product by filtered values
const getProducts = async (filters: IFilterProducts) => {
    try {
        // Call the api to get the product by the filtered values
        let productRes = await axios.post("/api/product/get", filters);

        // Return the product array data
        return productRes.data?.products;
    } catch (error) {
        throw Error(error);
    }
};

export default getProducts;
