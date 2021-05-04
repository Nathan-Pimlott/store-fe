import { Typography } from "@material-ui/core";
import * as React from "react";
import { observer } from "mobx-react-lite";

import Classes from "../../styles";
import BasketStore from "../../stores/basket";
import {IProduct} from '../../types';
import InlineProduct from '../lib/inlineProduct';

export default observer(() => {
    const classes = Classes();
    
    const basketStore = React.useContext(BasketStore);

    React.useEffect(() => {
        basketStore.getBasket();
    }, []);

    const onClick = () => {
        const product: IProduct = {
            name: 'T-shirt',
            description: 'Mens t shirt in a colour',
            img: 'https://media.istockphoto.com/photos/front-of-men-cut-black-tshirt-isolated-on-white-background-picture-id1142212002?k=6&m=1142212002&s=612x612&w=0&h=kUfL77LrIvxSnZ_XhFyPU9EvgJNooZjP6ixzyHk42Ic=',
            gender: 'mens',
            price: 12.99,
            color: 'white',
        };
        basketStore.addToBasket(product)
    }

    console.log('Basket: ', basketStore.basket);    

    return (
        <React.Fragment>
            <Typography className={classes.basketTitle} variant="h3">
                Your Basket
            </Typography>
            {
                basketStore.basket?.map((basketItem) => (
                    <InlineProduct product={basketItem} />
                ))
            }
            <div>
                <Typography variant='h5'>
                    Total
                </Typography>
                <Typography>
                    {basketStore.basket?.reduce((a, b) => a + b.price, 0)}
                </Typography>
            </div>
            <button onClick={onClick}>
                Hello
            </button>
        </React.Fragment>
    );
});
