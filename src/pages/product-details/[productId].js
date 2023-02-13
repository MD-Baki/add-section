import React, { useEffect, useState } from "react";
import { FeaturedData } from "../../components/FeaturedData/FeaturedData";
import { FaCheckSquare, FaCartPlus } from "react-icons/fa";

const ProductDetails = ({ product }) => {
    const [loading, setLoading] = useState(true);
    const { image, title, creator, price, sales } = product;

    console.log(product);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading)
        return (
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black mx-auto my-32"></div>
        );

    return (
        <div className="max-w-[1280px] mx-auto py-20">
            <div className="border-b-2 mb-3 pb-3">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <img src={image} alt="" className="w-full rounded-lg" />
                    <div className="font-medium text-[#696969] pt-5">
                        <p className="mb-2">
                            <span className="text-xl font-bold">Groovy</span> is
                            an unique & super modern Blog created by
                            EstudioPatagon following all the latest trends.
                            Highly focused in Speed and Vivid Colors, the
                            template fits perfectly any kind of blog specially
                            personal, travel, technology, comics/anime or
                            biography blogs. Also offers 2 schemes “Solid
                            Border” or “Soft Shadow” to fit perfectly any kind
                            of images.
                        </p>
                        <p className="mb-2">
                            It is super light (just 1 required plugin for all
                            features). This fast theme was made with multiple
                            techniques to achieve excellent Scores on Google
                            Insights, also we keep in mind the code quality and
                            SEO. It is easy to use and customize. Includes 11
                            customs widgets and a powerful Theme Options Panel
                            to make easier the administration.
                        </p>
                        <p className="mb-2">
                            Groovy is fully compatible with AMP in Transitional
                            Mode (home, archives, author and single post pages)
                            and it is multilanguage, includes: English, Spanish.
                            and you can easily translate the theme into any
                            language you want. For more lightweight & fast
                            themes, visit us on estudiopatagon.com
                        </p>
                        <p className="mb-2">
                            Important: This Theme is capable to get high scores
                            on Google Insights (up to 100%) for Desktop Check
                            the factors that could affect the speed here.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="border-2 p-6 rounded-lg">
                        <div className="flex justify-between text-lg font-bold items-center border-b-2 pb-3 mb-4">
                            <p>Regular License</p>
                            <p className="text-4xl text-green-600">${price}</p>
                        </div>
                        <div className="text-sm font-medium text-[#1d1d1d] grid gap-2">
                            <p className="flex items-center gap-2">
                                <span>
                                    <FaCheckSquare />
                                </span>
                                Included:Quality checked by Our Site
                            </p>
                            <p className="flex items-center gap-2">
                                <span>
                                    <FaCheckSquare />
                                </span>
                                Included:Future updates
                            </p>
                            <p className="flex items-center gap-2">
                                <span>
                                    <FaCheckSquare />
                                </span>
                                6 months support from EstudioPatagon
                            </p>
                        </div>
                        <button className="mt-4 w-full relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#303169] rounded-xl group">
                            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#131444] rounded group-hover:-mr-4 group-hover:-mt-4">
                                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                            </span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#131444] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                                <span className="flex items-center justify-center gap-2">
                                    <FaCartPlus /> Add To Cart
                                </span>
                            </span>
                        </button>
                        <p className="text-xs text-center font-medium text-[#696969] pt-3">
                            Price is in US dollars and excludes tax
                        </p>
                    </div>
                    <div className="border-2 p-6 rounded-lg mt-4 font-bold">
                        <div className="flex justify-between items-center">
                            <p className="text-black">Last Update-</p>
                            <p className="text-[#696969]">19 January 2023</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-black">Published-</p>
                            <p className="text-[#696969]">14 January 2023</p>
                        </div>
                    </div>
                    <div className="border-2 p-6 rounded-lg mt-4">
                        <h4 className="text-xl font-bold">Tags-</h4>
                        <p className="font-medium text-[#696969]">
                            amp, blog, creative, grid, high performance, high
                            speed, magazine, masonry, minimal, modern, personal,
                            responsive, seo, speed, typography
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

export async function getServerSideProps({ query }) {
    const productId = Number(query.productId);
    const product = FeaturedData?.find((data) => data.id === productId);

    return {
        props: {
            product,
        },
    };
}
