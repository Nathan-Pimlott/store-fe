import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Typography } from '@material-ui/core';

import ProductStore from '../../stores/product';
import Classes from '../../styles';
import Loading from '../core/loading';
import ProductTile from '../product/tile';
import { IProduct } from '../../types';

const Header = () => {
    const productStore = React.useContext(ProductStore);

    const classes = Classes();

    React.useEffect(() => {
        productStore.getProducts({
            gender: 'mens'
        })
    }, []);

    if (productStore.loading) {
        return <Loading />
    }
    return (
        <div>
            <Typography className={classes.pageTitle} variant='h2'>
                Mens Clothing
            </Typography>
            <div className={classes.productTileOuterContainer}>
                {productStore.products?.map((product: IProduct) => (
                    <div className={classes.productTileInnerContainer}>
                        <ProductTile
                            product={product}
                            classes={classes}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default observer(
    Header
);