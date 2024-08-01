import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Gallary() {
    const [products, setProducts] = useState([]);  // تم نقل useState إلى خارج getProduct

    let baseUrl = 'https://ecommerce.routemisr.com/api/v1';

    async function getProduct() {
        try {
            let { data } = await axios.get(`${baseUrl}/products`);
            setProducts(data.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <div>Gallary</div>
            <div className="container">
                <div className="row-tw gallery-row">
                    {products.map(prod => <Item key={prod.id} product={prod} />)}  {/* استخدم key مع id المنتج */}
                </div>
            </div>
        </>
    );
}

function Item({ product }) {  // استقبال props الخاصة بالمنتج
    return (
        <div className="gallery-item">
            <img src={product.imageCover} alt={product.name} />
            <h2>{product.title}</h2>  {/* عرض اسم المنتج */}
            <span>Price: {product.price}</span>  {/* عرض سعر المنتج */}
        </div>
    );
}
