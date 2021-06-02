import * as React from "react";
import { observer } from "mobx-react-lite";

import ProductStore from "../../stores/product";
import Loading from "../core/loading";

const Header = () => {
    const productStore = React.useContext(ProductStore);

    React.useEffect(() => {
        productStore.getProducts();
    }, []);

    if (productStore.loading) {
        return <Loading />;
    }

    return <div>Womens</div>;
};

export default observer(Header);
