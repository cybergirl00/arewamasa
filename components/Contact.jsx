"use client"
import { useState } from 'react';
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser"
const Contact = () => {
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [message, setMessage] = useState()
	const [loading, setLoading] = useState(false)

	const handleSubmit = (e) => {
		setLoading(true)
		e.preventDefault();

		emailjs.send("service_rpzuekk","template_pgnzhr5",
			{
				from_name: name,
				to_name: "Arewa Masa",
				from_email: email,
				to_email: 'dikkorabiat25@gmail.com',
				message: message
			},
			"oPX9XoOut2tKoVnGl"
		 )
		 .then((result) => {
			alert("Thank You");
			setLoading(false)
		 }, (error) => {
			console.log(error)
			alert("something went wrong " + error)
			setLoading(false)
		 }
		)
	}

	return (
		<section className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800" id="contact">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
					<div className="text-gray-600">Contact us to make an order.</div>
				</div>
				<img src="https://www.mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
			</div>
			<form  className="space-y-6" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name" className="text-sm">Full name</label>
					<input id="name" type="text" placeholder="Enter Name" value={name} className="w-full p-3 rounded bg-gray-100"  onChange={(e) => setName(e.target.value)}  
					/>
				</div>
				<div>
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" className="w-full p-3 rounded bg-gray-100" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'
					 />
				</div>
				<div>
					<label htmlFor="message" className="text-sm">Message</label>
					<textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100"
					value={message}
					onChange={(e) => setMessage(e.target.value)} placeholder='Enter  message'></textarea>
				</div>
				<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-gray-50"
				>
					{loading ?  "Sending..." :"Send Message" }
				</button>
			</form>
		</section>
	)
}

export default Contact
