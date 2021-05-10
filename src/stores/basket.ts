import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import { Cookies } from "react-cookie";

import { IProduct } from "src/types";

const cookies = new Cookies();

class BasketStore {
    basket: IProduct[] | null = null;
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    addToBasket = async (item: IProduct) => {
        try {
            this.loading = true;
            console.log("Here");

            let basketItems =
                (await cookies.get("basket_items")) || [];
            console.log("basket items: ", basketItems);
            await basketItems.push(item);
            cookies.set("basket_items", basketItems);
            console.log("Setting: ", basketItems);

            this.basket = basketItems;

            this.loading = false;
        } catch (error) {
            console.log("error");
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };

    getBasket = async () => {
        try {
            this.loading = true;

            this.basket = await cookies.get("basket_items");

            this.loading = false;
        } catch (error) {
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };

    removeFromBasket = async (id: string) => {
        try {
            console.log("ID: ", id);

            this.loading = true;

            let basketItems =
                (await cookies.get("basket_items")) || [];

            const newBasketItems = basketItems.map(
                (item) => item.id !== id
            );

            cookies.set("basket_items", newBasketItems);
            this.basket = newBasketItems;

            this.loading = false;
        } catch (error) {
            console.log("error");
            console.error(error);
            this.error = error;
            this.loading = false;
        }
    };
}

const basketStore = createContext(new BasketStore());

export default basketStore;
