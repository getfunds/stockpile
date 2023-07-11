import Card from "@/components/Explore/Card";
import Carousel from "@/components/Explore/Carousel";
import PopularCardCarousel from "@/components/Explore/PopularCarousel";
import Recommended from "@/components/Explore/Recommended";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";

export default function Explore() {

    const carouselData = [
        {
            image: 'https://i.imgur.com/OYWklZW.jpg',
            badge: 'Featured',
            title: 'Nautilus',
            description: 'Support the game-changing Solana program framework only on Stockpile.',
        },
        {
            image: 'https://i.imgur.com/KauAHP8.jpg',
            badge: 'Featured',
            title: 'Nautilus',
            description: 'Support the game-changing Solana program framework only on Stockpile.',
        },
        {
            image: 'https://i.imgur.com/coMty6O.jpg',
            badge: 'Featured',
            title: 'Nautilus',
            description: 'Support the game-changing Solana program framework only on Stockpile.',
        },
    ]
    return (
        <>
            <SEO
                title="Explore | Stockpile"
                description="Discover top projects raising funds, and funding rounds distributing."
                image=""
            />
            <Header />
            <main
                className={`flex min-h-screen flex-col items-center justify-between`}
            >
                <section className="w-full relative">
                    <Carousel data={carouselData} />
                </section>
                <section className="w-full relative">
                    <div className="mx-auto mt-16 w-10/12">
                        <div className="relative mb-8 inline-block">
                            <div className="absolute w-full h-3/4 rounded-lg bg-orange-600 transform scale-110 translate-y-1/2 z-10"></div>
                            <h2 className="relative font-technorbold font-semibold text-4xl text-black z-20">Trending</h2>
                        </div>
                        <PopularCardCarousel />
                    </div>
                </section>
                <section className="w-full relative">
                    <div className="bg-gray-200 mx-auto my-16 w-10/12 h-[1.5px] rounded-full" />
                </section>
                <section className="w-full relative">
                    <Recommended />
                </section>
                <section className="w-full relative z-0">
                    <div className="bg-gray-200 mx-auto my-16 w-10/12 h-[1.5px] rounded-full" />
                </section>
                <section className="w-full relative">
                    <div className="mb-16 mx-auto w-10/12">
                        <div className="relative mb-8 inline-block">
                            <div className="absolute w-full h-3/4 rounded-lg bg-orange-600 transform scale-110 translate-y-1/2 z-10"></div>
                            <h2 className="relative font-technorbold font-semibold text-4xl text-black z-20">New</h2>
                        </div>
                        <PopularCardCarousel />
                    </div>
                </section>
            </main>
        </>
    )
}