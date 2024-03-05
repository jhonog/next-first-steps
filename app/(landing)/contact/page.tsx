import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Next Contact About Page ',
  keywords: ['Contact page', 'Jhon', 'Contact']
 };
 

export default function Contact() {
  return (
      <>
          <span className="text-7xl">Contact Page</span>
      </>
  )
}