import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import { Cookies } from "react-cookie";

import { getProduct, getProducts, createProduct } from "../services/product";
import { IProduct, IFilterProducts } from "src/types";

// prettier-ignore
const cookies = new Cookies;

class ProductStore {
    loading: boolean = false;
    error: string | null = null;
    showBanner: boolean = false;
    bannerMessage: string = "";
    products: IProduct[] | null = null;
    productCount: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    hideBanner = async () => {
        try {
            this.showBanner = false;
            this.bannerMessage = "";
        } catch (error) {
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };

    getProduct = async (productId: number) => {
        try {
            this.loading = true;

            this.products = await getProduct(productId);

            this.loading = false;
        } catch (error) {
            console.error(error.message);
            this.error = error.message;
            this.loading = false;
        }
    };

    getProducts = async (filters?: IFilterProducts) => {
        try {
            this.loading = true;

            const productRes = await getProducts(filters);
            this.products = productRes.products;
            this.productCount = productRes.count;

            this.loading = false;
        } catch (error) {
            console.error(error.message);
            this.error = error.message;
            this.loading = false;
        }
    };

    createProduct = async () => {
        try {
            const product: IProduct = {
                name: "",
                description: "",
                price: 10.99,
                gender: "mens",
                img: "",
                color: "red",
            };
            this.loading = true;

            await createProduct(product);

            this.loading = false;
        } catch (error) {
            console.error(error.message);
            this.error = error.message;
            this.loading = false;
        }
    };
}

const productStore = createContext(new ProductStore());

export default productStore;
