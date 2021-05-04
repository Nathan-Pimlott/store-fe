import { Typography } from '@material-ui/core';
import * as React from 'react';

import { IProduct } from '../../types';

interface IProps { 
    product: IProduct 
};

const InlineProduct = ({ product }: IProps) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <img 
                    src={product.img}
                    alt='Product image' 
                    style={{ height: 100, width: 'auto' }}
                />
            </div>
            <div style={{ flex: 1 }}>
                <Typography style={{fontWeight: 'bold'}} variant='h6'>
                    {product.name}
                </Typography>
                <Typography>
                    {product.description}
                </Typography>
                <Typography>
                    {product.price}
                </Typography>
            </div>
            <div>
                Add a remove and quantity button :)
            </div>
        </div>
    )
}

export default InlineProduct;