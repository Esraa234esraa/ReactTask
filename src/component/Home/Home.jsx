import { useEffect } from "react";
import { useState } from "react"

export function Home() {
    const [first, setfirst] = useState('first')
    let [count, setCount] = useState(0);
    let [userName, setName] = useState('ahmed');
    let [product, setProduct] = useState('Apple');
    let [products, setProducts] = useState([
        { pName: '1', price: 200 },
        { pName: '2', price: 300 },
        { pName: '3', price: 700 }
    ]);
    function changeName() {
        setName('esraa');
    }
    function changeCount() {
        setCount(Math.round(Math.random() * 10));
    }

    useEffect(() => {
        if (count == 0 && userName== 'ahmed') {
        return;
    }
        else {

        console.log('update');
    }
    //did Mount
    // //call api
    // console.log('mount');
    // let x = setInterval(() => {
    //     console.log('mountinnnng');
    // }, 1000)
    return () => {
        // // will un mount

        // clearInterval(x)
    }
}, [count, userName])

// useEffect(() => {
//     if (userName == 'ahmed') {
//         return;

//     }
//     else {
//         console.log('changed');
//     }

//     return () => {
//         console.log('sstoped');
//     }
// }, [userName])
return (
    <>

        <h1 className="pb-5">This is the Home Component</h1>
        <h2 className="pb-5">Hello {userName}</h2>
        <button className="pb-6" onClick={changeName}>Change Name</button>
        <br />
        <br />
        <span className="">Count {count}</span>
        <br />
        <br />
        <button className="pb-5" onClick={() => { changeCount() }}>change Count</button>

        <h3 className="pb-5">
            product    {product}
        </h3>
        <br />
        <br />
        <p>{first}</p>
        <ul>
            <li>{ }</li>
        </ul>
    </>
);
}
