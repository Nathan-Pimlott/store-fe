import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import { Cookies } from "react-cookie";

import { IProduct } from "../types";
import {
    addToBasket,
    removeFromBasket,
    updateQuantity,
} from "../services/basket";

// prettier-ignore
const cookies = new Cookies;

class BasketStore {
    loading: boolean = false;
    error: string | null = null;
    showBanner: boolean = false;
    bannerMessage: string = "";
    basket: IProduct[] | null = null;

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
        }
    };

    getBasket = async () => {
        try {
            this.loading = true;

            const basketItems = await cookies.get("basket_items");

            this.basket = basketItems;

            this.loading = false;
        } catch (error) {
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };

    addToBasket = async (item: IProduct) => {
        try {
            this.loading = true;

            let basketItems = await addToBasket(item);

            this.basket = basketItems;

            this.showBanner = true;
            this.bannerMessage = `${item.name} added to basket.`;

            this.loading = false;
        } catch (error) {
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };

    removeFromBasket = async (id: string) => {
        try {
            this.loading = true;

            const newBasketItems = await removeFromBasket(id);

            this.basket = newBasketItems;

            this.showBanner = true;
            this.bannerMessage = "Removed from basket.";

            this.loading = false;
        } catch (error) {
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };

    updateQuantity = async (id: string, quantity: number) => {
        try {
            if (quantity === 0) {
                return this.removeFromBasket(id);
            }
            this.loading = true;

            const updatedBasketItems = await updateQuantity(id, quantity);

            this.basket = updatedBasketItems;

            this.showBanner = true;
            this.bannerMessage = "Quantity updated.";

            this.loading = false;
        } catch (error) {
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };
}

const basketStore = createContext(new BasketStore());

export default basketStore;
