import React from "react";
import Cards from "../Cards/Cards";
import { FeaturedData } from "../FeaturedData/FeaturedData";

const Featured = () => {
    return (
        <div className="py-24">
            <div className="content grid grid-cols-3 gap-6">
                <div className="grid items-center text-center rounded-lg py-8 px-12 bg-gradient-to-t from-[#243238] to-[#102f49]">
                    <div>
                        <h2 className="text-white font-bold text-2xl uppercase  mb-3">
                            Featured themes
                        </h2>
                        <p className="text-[#f3f3f3]">
                            Every week, our staff personally hand-pick some of
                            the best new website themes from our collection.
                        </p>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    {FeaturedData.map((featured) => (
                        <Cards key={featured.id} featuredItems={featured} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;
