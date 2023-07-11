import React, { FC } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface CardProps {
    image: string;
    title: string;
    description: string;
    primaryTag: string;
    secondaryTag: string;
    raised: number;
    goal: number;
}

const Card: FC<CardProps> = ({ image, title, description, primaryTag, secondaryTag, raised, goal }) => {
    const progress = (raised / goal) * 100;

    return (
        <div className="relative transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 border border-gray-300 rounded-xl shadow-md w-auto h-auto">
            <img className="w-full h-52 object-cover rounded-t-xl" src={image} alt="" />
            <div className="px-4 pb-2">
                <h2 className="font-bold font-rubik text-xl text-black mt-4 pointer-events-none">{title}</h2>
                <p className="text-gray-400 text-sm font-rubik mt-2 pointer-events-none">{description}</p>
                <div className="flex space-x-2 my-4">
                    <span className="bg-transparent border-2 border-orange-500 text-orange-500 font-rubik text-sm py-1 px-2 rounded-md pointer-events-none">{primaryTag}</span>
                    <span className="bg-transparent text-gray-400 border-2 border-gray-400 font-rubik text-sm py-1 px-2 rounded-md pointer-events-none">{secondaryTag}</span>
                </div>
                <div className="flex items-baseline justify-start gap-x-[0.35rem]">
                    <h3 className="font-semibold text-xl text-black font-rubik pointer-events-none">${raised}</h3>
                    <span className="text-gray-500 text-sm font-rubik pointer-events-none">raised</span>
                </div>
                <ProgressBar completed={progress} bgColor="orange" baseBgColor="lightgray" isLabelVisible={false} height="18px" className="my-2 rounded-full" />
            </div>
        </div>
    );
}

export default Card;