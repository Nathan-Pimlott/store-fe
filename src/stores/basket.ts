import { createContext } from "react";
import { makeAutoObservable } from "mobx";
import { Cookies } from "react-cookie";

import { IProduct } from "src/types";

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

            console.log("Basket Items: ", basketItems);

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

            let basketItems =
                (await cookies.get("basket_items")) || [];

            await basketItems.push(item);

            cookies.set("basket_items", JSON.stringify(basketItems));
            this.basket = basketItems;

            this.showBanner = true;
            this.bannerMessage = "Added to basket.";

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

            let basketItems: IProduct[] =
                (await cookies.get("basket_items")) || [];

            const newBasketItems = basketItems.filter(
                (item) => item.id !== id
            );

            cookies.set("basket_items", newBasketItems);
            this.basket = newBasketItems;

            this.showBanner = true;
            this.bannerMessage = "Removed from basket.";

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
