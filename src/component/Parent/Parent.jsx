import React from 'react'
import { useState } from 'react'

import Child from '../child/Child'

export default function Parent() {
    const [products, setProducts] = useState(
        [
            { id: 1, pName: 'dell', price: 22000, onSale: false },
            { id: 2, pName: 'lenovo', price: 100000, onSale: true },
            { id: 3, pName: 'Mac', price: 204000, onSale: false },
            { id: 4, pName: 'HP', price: 29000, onSale: true },
            { id: 5, pName: 'HP', price: 29000, onSale: false },
            { id: 6, pName: 'HP', price: 29000, onSale: false },
            { id: 7, pName: 'HP', price: 29000, onSale: true }

        ]
    )
    function deleteProd(id) {
        // let myProducts = structuredClone(products);
        // myProducts.splice(index, 1);
        // setProducts(myProducts);

        let myProducts = structuredClone(products);
        let newProduct = myProducts.filter((product) => {
            return product.id !== id;
        })
        setProducts(newProduct);

    }
    function updateProduct(index) {
        // alert(index);
        let upDateProducts = structuredClone(products);

        upDateProducts[index].price += 1000;
        setProducts(upDateProducts);
    }
    //data from component to other
    // const [userName, setUserName] = useState("Esraa");
    // const [salary, setSalary] = useState(60000)
    // const [age, setAge] = useState(21)
    // const [Gender, setGender] = useState("Female")

    return (<>
        <div className='container'>
            <div className='flex justify-content-between align-items-center flex-wrap'>
                {/* <Child products={products[0]}></Child>
                <Child products={products[1]}></Child> */}
                {
                    products.map((product, index) => {
                        return <Child products={product} key={index} delete={deleteProd} update={updateProduct} index={index}></Child>
                    })
                }
            </div>
        </div>
        {/* <Child userName={userName} userSalary={salary} userAge={age} userGender={Gender} products={products[0]}></Child> */}
    </>

    )
}
