import React, { useState } from "react";

// Creating a context for product data
export const ProductContext = React.createContext(null);

// Component for providing product data to the application
const DataComp = ({ children }) => {
  const [productData, setProductData] = useState({
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/4526398/pexels-photo-4526398.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/2880532/pexels-photo-2880532.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://images.stockcake.com/public/7/9/0/790dbe97-49da-4b94-ae51-bffb347819a6_large/smartphone-on-table-stockcake.jpg",
          "https://images.stockcake.com/public/2/2/c/22cf903c-9dbe-4b7f-a2ff-b0dbf3247eb6_large/sushi-ordering-online-stockcake.jpg",
          "https://images.stockcake.com/public/1/5/d/15d814b0-8024-4cdf-b5cd-c674bcc71f4b_large/sunset-phone-display-stockcake.jpg",
          "https://images.stockcake.com/public/8/8/9/88921a95-cae8-432d-a0f0-15792bb66186_large/modern-mobile-phone-stockcake.jpg",
        ],
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: [
          "https://images.stockcake.com/public/3/7/d/37d26de3-7211-4a2b-a8f2-85c6e1c559e0_large/using-smartphone-indoors-stockcake.jpg",
          "https://images.stockcake.com/public/4/5/7/45752b32-bede-47ee-9ec0-0c54aaf79870_large/modern-smartphone-display-stockcake.jpg",
          "https://images.stockcake.com/public/c/e/f/cef2da22-a77c-4ea6-a5d6-2b2d36b4370d_large/hand-holding-smartphone-stockcake.jpg",
        ],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://images.stockcake.com/public/7/0/4/70443bdf-4ba7-4e35-af1f-747846602b2e_large/mobile-gaming-moment-stockcake.jpg",
          "https://images.stockcake.com/public/8/2/4/824ce318-940d-47cc-9631-8484818e5717_large/mobile-ordering-app-stockcake.jpg",
          "https://images.stockcake.com/public/e/8/0/e803dacc-a06e-4739-a8b2-dcf5a9c03324_large/mobile-payment-checkout-stockcake.jpg",
          "https://images.stockcake.com/public/9/a/6/9a6da48d-0e20-4b75-8001-f6002fcc5f6e_large/mobile-language-learning-stockcake.jpg",
          "https://images.stockcake.com/public/e/c/d/ecde4f13-6aa5-4e90-8467-b652647e0a00_large/innovative-mobile-technology-stockcake.jpg",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://images.stockcake.com/public/f/9/b/f9bb7309-8a97-489e-9630-a62483bcc833_large/mobile-gambling-setup-stockcake.jpg",
          "https://images.stockcake.com/public/0/2/f/02f7d8ac-3e91-4770-a53c-92e951401724_large/mobile-payment-shopping-stockcake.jpg",
          "https://images.stockcake.com/public/d/6/4/d64e65c3-5c45-4c97-b334-f43745d4a54e_large/mobile-payment-process-stockcake.jpg",
        ],
      },
    ],
  });
  return (
    <div>
      <ProductContext.Provider value={{ productData, setProductData }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default DataComp;
