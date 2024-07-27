import { SoupIcon } from 'lucide-react';

const Owner = () => {
  return (
    <section id="about">
      <h3 className="text-3xl font-bold flex flex-col items-center pt-7 justify-center p-4">About the Chef</h3>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center justify-center">
        <div className="p-7">
          <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
            <div className="space-y-4">
              <div className="space-y-2">
                <img src="/chef1.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold dark:text-violet-600">Mrs Abullahi Rakiyat &lsquo;The Chef&rsquo;</h3>
                </a>
                <p className="leading-snug dark:text-gray-600">A very talented and exprienced hausa chef. with over 12 years exprience. Rest assured your masa will be created with love. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-7 rounded-md border mr-7">
          <h2 className="text-2xl font-bold">About <span className="text-primary">Masa</span></h2>
          <h3 className="text-gray-500 text-lg">
            Masa is a traditional West African flatbread made from rice flour or corn flour water and a pinch of salt It is a simple soft and slightly tangy bread that is a staple in Hausa cuisine
          </h3>

          <div className="p-3">
            <h2 className="text-1xl font-semibold pb-2">Ingredients: </h2>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div>
                  <h2 className="flex gap-2">
                    <SoupIcon className="text-primary" /> Rice/Corn Flour
                  </h2>
                </div>

                <div>
                  <h2 className="flex gap-2">
                    <SoupIcon className="text-primary" /> Salt
                  </h2>
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <h2 className="flex gap-2">
                    <SoupIcon className="text-primary" /> Sugar
                  </h2>
                </div>

                <div>
                  <h2 className="flex gap-2">
                    <SoupIcon className="text-primary" /> Spices
                  </h2>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;


// NXBKQY9WTGQX9U4MQ2AYXXSA
// +15073166972
