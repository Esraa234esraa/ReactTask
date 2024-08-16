import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function toggole() {
    const links = document.getElementById('links');
    if (links.classList.contains('hidden')) {
        links.classList.remove('hidden');
        links.classList.add('flex');
        links.animate(
            [
                { transform: 'translateY(-100%)', opacity: 0 },
                { transform: 'translateY(0)', opacity: 1 }
            ],
            {
                duration: 600, // Animation duration in milliseconds
                easing: 'ease-out', // Animation easing function
                fill: 'forwards' // Keeps the final state of the animation
            }
        );
    } else {
        links.animate(
            [
                { transform: 'translateY(0)', opacity: 1 },
                { transform: 'translateY(-100%)', opacity: 0 }
            ],
            {
                duration: 600, // Animation duration in milliseconds
                easing: 'ease-in', // Animation easing function
                fill: 'forwards' // Keeps the final state of the animation
            }
        ).onfinish = () => {
            links.classList.remove('flex');
            links.classList.add('hidden');
        };
    }
}

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 70) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

export function Navbar() {
    return (
        <>
            <nav>
                <div className="bg-gray-700 fixed top-0 right-0 left-0 navbar z-10">
                    <ul className="flex items-start gap-8 flex-col lg:flex-row text-white w-[85%] mx-auto px-7 lg:px-5  lg:justify-between lg:items-center top-3">

                        <div className="nav flex w-[100%] justify-between logo cursor-pointer text-3xl font-bold">
                            <div className="log">
                                <NavLink to={''}>START FRAMEWORK</NavLink>
                            </div>
                            <div onClick={toggole} className="lg:hidden toggle" id="toggle">
                                <i className="fa fa-list text-2xl border p-2 rounded"></i>
                            </div>
                        </div>
                        <div id="links" className="links hidden lg:flex flex-col gap-10 lg:ps-4 lg:flex-row font-semibold text-lg leading-4 lg:items-center lg:justify-center">
                            <li className="cursor-pointer">
                                <NavLink to={'about'}>ABOUT</NavLink>
                            </li>
                            <li className="cursor-pointer">
                                <NavLink to={'portfolio'}>PORTFOLIO</NavLink>
                            </li>
                            <li className="cursor-pointer">
                                <NavLink to={'contact'}>CONTACT</NavLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}
