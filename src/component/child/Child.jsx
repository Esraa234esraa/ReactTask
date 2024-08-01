
import React, { useState } from 'react';

export default function Child(props) {
    const { id, pName, price, onSale } = props.products;

    return (<>
        <div className='relative size-[16rem] pt-[15%]  mx-auto my-2 bg-slate-400 shadow-sm p-3 rounded-sm'>
            <p>product id: {id}</p>

            <p>product Name: {pName}</p>
            <p className=''>product price:{price}</p>

            {onSale ?
                <div className='sale'>sale</div>
                : ''
            }

            <button className='delete' onClick={() => { props.delete(id) }}>Delete</button>
            <button className='update' onClick={() => { props.update(props.index) }}>Update</button>

        </div >
        {/* <div className='text-3xl'>
        <div>Child</div>
        {userName && <h2>userName: {userName}</h2>}
        {userSalary && <h3>Salary: {userSalary}</h3>}
        {userAge && <h3>Age: {userAge}</h3>}
        {userGender && <h3>Gender: {userGender}</h3>}
    </div> */}
    </>)


}