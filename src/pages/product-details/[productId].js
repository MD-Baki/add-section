import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FeaturedData } from "../../components/FeaturedData/FeaturedData";

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
            <h2 className="text-xl font-bold">{title}</h2>
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
