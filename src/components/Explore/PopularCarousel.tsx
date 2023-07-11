import React, { FC } from "react";
import styles from "../../styles/Transitions.module.css";
import Card from "./Card";

const PopularCardCarousel: FC = () => {
    return (
        <div className={`${styles.fadeInUp} grid grid-cols-4 gap-x-4 w-full`}>
            <Card
                image="https://i.imgur.com/YYZmmfs.jpg"
                title="Solana Breakpoint"
                description="The biggest Solana event of the year, hosted in Amsterdam."
                primaryTag="Project"
                secondaryTag="Event"
                raised={10000}
                goal={10000}
            />
            <Card
                image="https://i.imgur.com/KauAHP8.jpg"
                title="Nautilus Project"
                description="A SQL native Solana program framework design to simplfy development."
                primaryTag="Project"
                secondaryTag="Dev-Tool"
                raised={200}
                goal={500}
            />
            <Card
                image="https://i.imgur.com/HBldBPz.jpg"
                title="Stockpile Superstars"
                description="The weekly issue where we cover the best projects on Solana."
                primaryTag="Project"
                secondaryTag="Publication"
                raised={32}
                goal={100}
            />
            <Card
                image="https://i.imgur.com/1QLGXHO.png"
                title="Solana All-Stars"
                description="Bringing awesome Solana events to developing countries around the world."
                primaryTag="Project"
                secondaryTag="Collective"
                raised={4120}
                goal={5000}
            />
        </div>
    );
}

export default PopularCardCarousel;