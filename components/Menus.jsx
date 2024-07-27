import Image from "next/image";

const Menus = () => {
    const menus = [
        {
            title: 'Chicken',
            price: "100",
            image: "/chicken.jpg", 
            desc: "Masa and chicken is a popular pairing in West African cuisine, where the soft and slightly tangy masa flatbread is wrapped around or served with flavorful and tender chicken, often seasoned with spices and herb."
        },
        {
            title: 'Tigernut Drink',
            price: "100",
            image: "/tigernut.jpg",
            desc: "Tiger nut, also known as aya or chufa, is a nutritious and versatile ingredient used in many West African dishes, including those paired with masa. It's a sweet and nutty tuber that can be boiled, roasted, or ground into flour for various recipes."
        },
        {
            title: 'Zobo Drink',
            price: "100",
            image: "/zobo.jpg",
            desc: "Zobo, also known as hibiscus tea, is a popular West African drink made from the leaves of the hibiscus sabdariffa plant. It's a refreshing, caffeine-free beverage with a sweet and slightly tart flavor. Zobo's sweet and fruity flavor pairs well with the savory flavors of masa and yagi or chicken, making it a great addition to the combination!"
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                {menus.map((item, index) => (
                    <li key={index} className="flex flex-col items-center">
                        <div className="group relative block h-64 sm:h-80 lg:h-96 w-full">
                            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
                            <div
                                className="relative flex h-full transform items-center justify-center border-2 border-primary bg-white transition-transform pt-5 group-hover:-translate-x-2 group-hover:-translate-y-2"
                            >
                                <div
                                    className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 flex flex-col items-center justify-center"
                                >
                                    <Image 
                                        src={item.image} 
                                        layout="fill" 
                                        objectFit="cover" 
                                        alt={item.title} 
                                        className="" 
                                    />
                                    <h2 className="mt-4 text-xl font-bold sm:text-2xl">{item?.title}</h2>
                                </div>

                                <div
                                    className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                                >
                                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">{item.title}</h3>
                                    <p className="mt-4 text-sm sm:text-base">
                                      {item?.desc}
                                    </p>
                                    <p className="mt-8 font-bold">Read more</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menus;
