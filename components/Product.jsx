"use client"
const Product = () => {
    const posts = [
        {
            title: "Masa and Soup",
            desc: "Masa's soft and slightly tangy texture perfectly complements the rich flavors of soups, soaking up the savory goodness with each bite. Whether it's a spicy peanut stew or a hearty vegetable broth, masa is the ultimate soup companion.",
            img: "/masasoup.jpg",
            date: "Masa 100 per one",
        },
        {
            title: "Masa and Suya",
            desc: "Masa's mild flavor and soft texture provide a delightful contrast to the smoky, spicy goodness of suya, making each bite a match made in heaven. The subtle tang of masa helps balance the bold flavors of the grilled meat, creating a truly unforgettable snack.",
            img: "/masasuya.jpg",
            date: "Masa N100 per one",
        },
        {
            title: "Masa and Yagi",
            desc: "Masa and Yagi: A West African snack combo featuring soft, traditional flatbread (masa) wrapped around spicy, smoky, grilled meat (yagi), creating a delightful fusion of flavors and textures.",
            img: "/masayagi.jpg",
            date: "Masa N100 per one",
        },
        {
            title: "Masa and Chicken",
            desc: "Masa and chicken is a popular pairing in West African cuisine, where the soft and slightly tangy masa flatbread is wrapped around or served with flavorful and tender chicken, often seasoned with spices and herb.",
            img: "/masachicken.jpg",
            date: "Chicken N1000 per one",
        }
    ]
  return (
    <section className="py-32" id="#dishes">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Our Popular Masa Dishes</h1>
            <p className="text-gray-600">Masa that are loved by the community.</p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {
                posts.map((items, key) => (
                    <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                        <div>
                            <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-lg" />
                            <div className="mt-3 space-y-2">
                            <span className="block text-indigo-600 text-sm">{items.date}</span>
                                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                    {items.title}
                                </h3>
                                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
</section>
  )
}

export default Product