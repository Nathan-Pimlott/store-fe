import { Cookies } from "react-cookie";

import { IProduct } from "../types";

// prettier-ignore
const cookies = new Cookies;

export async function addToBasket(item: IProduct) {
    try {
        let basketItems: IProduct[] = (await cookies.get("basket_items")) || [];

        if (basketItems.find((basket) => basket.id === item.id)) {
            basketItems.find((basket) => basket.id === item.id).quantity += 1;
        } else {
            basketItems.push({
                ...item,
                quantity: 1,
            });
        }

        cookies.set("basket_items", JSON.stringify(basketItems));

        return basketItems;
    } catch (error) {
        console.error(error);
        throw Error(error);
    }
}

export async function removeFromBasket(productId: string) {
    try {
        let basketItems: IProduct[] = (await cookies.get("basket_items")) || [];

        let newBasketItems: IProduct[];

        if (
            basketItems.find((basket) => basket.id === productId).quantity > 1
        ) {
            basketItems.find((basket) => basket.id === productId).quantity -= 1;
        } else {
            newBasketItems = basketItems.filter(
                (item) => item.id !== productId
            );
        }

        cookies.set("basket_items", JSON.stringify(newBasketItems));

        return newBasketItems;
    } catch (error) {
        console.error(error);
        throw Error(error);
    }
}

export async function updateQuantity(productId: string, quantity: number) {
    try {
        console.log("ProductId: ", productId);
        console.log("quantity: ", quantity);

        let basketItems: IProduct[] = (await cookies.get("basket_items")) || [];

        if (basketItems.find((basket) => basket.id === productId).quantity) {
            basketItems.find((basket) => basket.id === productId).quantity =
                quantity;
            cookies.set("basket_items", JSON.stringify(basketItems));
        } else {
            throw Error("Cannot find product by id");
        }

        return basketItems;
    } catch (error) {
        console.error(error);
        throw Error(error);
    }
}
