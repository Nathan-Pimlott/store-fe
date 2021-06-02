import { createContext } from "react";
import { makeAutoObservable } from "mobx";

type IBannerType = "success" | "error" | "warning" | null;

class BannerStore {
    open: boolean = false;
    message: string | null = null;
    bannerType: IBannerType = null;
    error: any = null;

    constructor() {
        makeAutoObservable(this);
    }

    hideBanner = async () => {
        try {
            this.open = false;
            this.message = null;
            this.bannerType = null;
        } catch (error) {
            this.error = error;
        }
    };

    showBanner = async (message: string, bannerType: IBannerType) => {
        try {
            this.open = true;
            this.message = message;
            this.bannerType = bannerType;
        } catch (error) {
            this.error = error;
        }
    };
}

const bannerStore = createContext(new BannerStore());

export default bannerStore;
