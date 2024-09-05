import Link from "next/link";
import Share from "./share/page";

export default function MealsPage(){
    return (
    <>
    <h1>Meals Page</h1>
    <p><Link href="/meals/share">Meals share</Link></p>
    </>)
}