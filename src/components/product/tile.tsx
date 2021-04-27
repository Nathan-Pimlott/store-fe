import * as React from 'react';
import { Card, Typography } from '@material-ui/core';

import { IProduct } from '../../types';

interface IProps {
    product: IProduct;
    classes: any;
};

const RenderProductTile = (props: IProps) => (
    <Card className={props.classes.productTileCard}>
        <Typography variant='h5'>
            {props.product.name}
        </Typography>
        <img 
            src='https://www.montane.com/images/montane-dart-t-shirt-p671-14248_image.jpg' 
            alt='product image' 
            className={props.classes.productImage}
        />
    </Card>
);

export default RenderProductTile