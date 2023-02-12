import React, { Component } from "react";
import Cards from "../Cards/Cards";
import Slider from "react-slick";
import { FeaturedData } from "../FeaturedData/FeaturedData";
import { FaArrowRight } from "react-icons/fa";

const Trending = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
    };
    return (
        <div className="pb-24">
            <div className="flex justify-between items-center pb-8">
                <h2 className="text-xl font-bold uppercase">Trending</h2>
                <button className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex gap-2 items-center">
                        View More <FaArrowRight />
                    </span>
                </button>
            </div>
            <div>
                <Slider {...settings}>
                    {FeaturedData.map((featured) => (
                        <Cards key={featured.id} featuredItems={featured} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Trending;
