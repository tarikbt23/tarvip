"use client";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image"; 

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/slidableServices.json");
      const data = await res.json();
      setProducts(data);
      setIsLoaded(true);
    };

    fetchProducts();
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-4 mx-auto">
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          perMove: 1,
          pagination: false,
          rewind: true,
          arrows: false,
          gap: "1rem",
          padding: "1rem",
          breakpoints: {
            1200: { perPage: 5, gap: "0.5rem", padding: "0.5rem" },
            991: { perPage: 4, gap: "0.5rem", padding: "0.5rem" },
            768: { perPage: 2, gap: "0.5rem", padding: "0.5rem" },
            640: { 
              perPage: 1,
              perMove: 1,
              direction: 'ttb', // mobilde dikey yönlendirme
              height: 'auto',
              gap: "0.5rem",
              padding: "0.5rem",
            },
          },
          arrows:true,
        }}
        aria-label="Ürün Galerisi"
        className="w-full"
      >
        {products.map((product) => (
          <SplideSlide key={product.id} className="flex justify-center mb-4">
            <div className="flex flex-row md:flex-col justify-between items-center border rounded-lg font-sans h-full p-2 bg-blue-900 shadow-md w-full max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-xs">
              <div className="flex flex-col items-center gap-y-2 w-1/3 md:w-full">
                <div className="flex justify-center items-center w-full h-20 md:h-40 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start md:items-center w-2/3 md:w-full pl-4 md:pl-0">
                <div className="flex flex-row md:flex-col justify-between items-center w-full">
                  <p className="font-semibold text-blue-50 text-sm mr-2 md:mr-0 md:mb-2">
                    {product.title}
                  </p>
                  <button className="text-blue-50 px-2 py-1 rounded w-auto md:w-full">İncele</button>
                </div>
                <div className="hidden md:block mt-2">
                  <button className="bg-blue-50 text-blue-900 font-bold px-2 py-1 rounded w-full">Teklif Verin</button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
