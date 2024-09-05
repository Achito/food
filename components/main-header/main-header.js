
import Link from "next/link"
import Image from "next/image"

import MainHeaderBackground from "./main-header-background"
import logoImg from '@/assets/logo.png'
import clasess from './main-header.module.css'
import { ImageResponse } from "next/server"
import NavLink from "./nav-link"



export default function MainHeader(){


    
    return (
    <>
    <MainHeaderBackground/>
    <header className={clasess.header}>
        <Link className={clasess.logo} href="/">
        <Image src={logoImg} alt="" priority/>
        NextLevel Food
        </Link>
        <nav className={clasess.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Brose Meals</NavLink>
                </li>
                <li>
                <NavLink href="/community">Food Community</NavLink>
                </li>
            </ul>
        </nav>

    </header>
    </>)
}