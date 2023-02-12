import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Cards = ({ featuredItems }) => {
    const { id, image, title, creator, price, sales } = featuredItems;
    return (
        <div className="rounded-lg shadow-lg">
            <img
                src={image}
                alt="Featured Image"
                className="h-[250px] w-full rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="font-medium">{title}</h2>
                <h4 className="font-medium text-sm text-[#505050] py-2">
                    {creator}
                </h4>
                <div className="flex justify-between items-center">
                    <p className="font-medium text-xl">
                        ${price} <span></span>
                    </p>
                    <p className="text-[#505050] font-medium">{sales} Sales</p>
                </div>
                <div className="rating flex items-center gap-[2px] pt-2 text-orange-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                </div>
                <div className="grid grid-cols-2 gap-1 pt-4">
                    <button className="w-full relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                            Live Demo
                        </span>
                    </button>
                    <Link
                        href={`/product-details/${id}`}
                        className="w-full text-center relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                    >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                            Details
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;
