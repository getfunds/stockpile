import React, { FC } from 'react';
import styles from "../../styles/Transitions.module.css";

interface CardProps {
    imageUrl: string;
    text: string;
}

const Card: FC<CardProps> = ({ imageUrl, text }) => (
    <div className={`${styles.fadeInUp}`}>
        <a href="#">
            <div className="relative z-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 group rounded-xl overflow-hidden">
                <img src={imageUrl} className="object-cover z-0" alt="..." />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-0 flex items-center justify-center hover:bg-opacity-65">
                    <p className="text-white text-4xl font-bold font-rubik z-0">{text}</p>
                </div>
            </div>
        </a>
    </div>
);

const Recommended: FC = () => {
    const imagePaths = [
        {
            text: "Open-Source",
            image: 'https://i.imgur.com/9efwytF.jpg',
        },
        {
            text: "Humanitarian",
            image: 'https://i.imgur.com/1U4dz3u.jpg',
        },
        {
            text: "Invention",
            image: 'https://i.imgur.com/vjETozp.jpg',
        },
        {
            text: "Regenerative",
            image: 'https://i.imgur.com/IquZXV3.jpg',
        },
    ];

    return (
        <div className="flex flex-wrap justify-center lg:justify-between w-10/12 mx-auto grid grid-cols-2 gap-4">
            {imagePaths.map((path, i) => (
                <Card key={i} text={path.text} imageUrl={path.image} />
            ))}
        </div>
    );
};

export default Recommended;
