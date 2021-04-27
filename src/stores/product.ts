import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { Cookies } from 'react-cookie';

import { getProduct, getProducts } from '../services/product';
import { IProduct, IFilterProducts } from 'src/types';

const cookies = new Cookies;

class ProductStore {
    products: IProduct[] | null = null;
    // Used for rendering loading screen
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    getProduct = async (productId: number) => {
        try {
            this.loading = true;

            this.products = await getProduct(
                productId
            )

            this.loading = false;
        } catch (error) {
            console.error(error.message)
            this.error = error.message;
        }
    }

    getProducts = async (filters?: IFilterProducts) => {
        try {
            this.loading = true;

            this.products = await getProducts(
                filters
            )

            this.loading = false;
        } catch (error) {
            console.error(error.message)
            this.error = error.message;
            this.loading = false;
        }
    }
}

const productStore = createContext(new ProductStore())

export default productStore