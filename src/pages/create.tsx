import React, { FC } from "react";
import styles from "../styles/Transitions.module.css";
import Create from "../components/Project/create";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Contribute: FC = () => {
    return (
        
        <div className="bg-[#e1e1e1] w-full h-[1580px] " >
            <SEO
                title="Create | Stockpile"
                description="Discover top projects raising funds, and funding rounds distributing."
                image=""
            />
            <Header />
            <Create />
            
            </div>

)
};
export default Contribute;