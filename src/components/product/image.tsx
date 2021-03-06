import * as React from "react";

interface IProductImageProps {
    imgSrc: string;
    classes: any;
}

const ProductImage = ({ imgSrc, classes }: IProductImageProps) => {
    return (
        <div style={{ flex: 1, display: "flex", padding: 20 }}>
            <img
                src={imgSrc}
                alt="product image"
                style={{
                    margin: "auto 0 auto auto",
                    height: 600,
                    width: "auto",
                }}
                id="product-image"
            />
        </div>
    );
};

export default ProductImage;
