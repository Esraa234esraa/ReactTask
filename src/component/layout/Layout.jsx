import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <h1>footer</h1>

        </div>
    )
}
