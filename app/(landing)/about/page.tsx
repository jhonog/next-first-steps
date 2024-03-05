import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Next Course About Page ',
 keywords: ['About page', 'Jhon', 'Infromation']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}