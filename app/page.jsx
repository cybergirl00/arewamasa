import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Menus from "@/components/Menus"
import Navbar from "@/components/Navbar"
import Owner from "@/components/Owner"
import Product from "@/components/Product"

const page = () => {
  return (
    <div>
   <Navbar />

   <Hero />

   {/* Product */}
   <Product />
   <Menus />


{/* About the owner */}

<Owner />
   {/* CONTACT US */}

   <Contact />
    </div>
  )
}

export default page