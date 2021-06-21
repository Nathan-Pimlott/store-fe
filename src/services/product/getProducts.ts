import axios from "axios";

import { IFilterProducts } from "../../types";

const getProducts = async (filters: IFilterProducts) => {
    try {
        let productRes = await axios.post("/api/product/get", filters);

        return productRes.data;
    } catch (error) {
        throw Error(error);
    }
};

export default getProducts;
