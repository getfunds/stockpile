import styles from "../../styles/Transitions.module.css";
import Scene from '@/components/Landing/Synthwave';
import Link from 'next/link';
import Wormhole from "./Wormhole";

const Hero = () => {
    return (
        <>
            <div className="relative mt-48 mb-24 mr-auto ml-auto w-9/12">
                <div className={`${styles.fadeInUp} z-0`}>
                    <div className="text-center">
                        <h1 className="z-0 text-6xl font-technorblack font-extrabold tracking-wide leading-normal tracking-tight text-zinc-900 sm:text-6xl">
                            Funding Without{" "}
                            <span className="z-0 text-6xl font-technorblack font-extrabold tracking-wide leading-normal tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 sm:text-6xl">Barriers</span>
                        </h1>
                        <p className="lg:mt-4 mt-8 z-0 font-rubik font-medium text-lg lg:leading-8 text-zinc-500 leading-[24px]">
                            Community crowdfunding for the best projects available, powered by Web3.
                        </p>
                        <div className="mt-6 mb-12 flex items-center justify-center gap-x-6 z-0">
                            <a href="/explore">
                                <button
                                    className="inline-flex items-center transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-lg px-5 py-3 shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    <p
                                        className="font-rubik font-semibold text-md text-white"
                                    >
                                        Enter
                                    </p>
                                </button>
                            </a>
                            <a href="https://docs.stockpile.pro/">
                                <button
                                    className="inline-flex items-center transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-xl bg-white border border-l-black border-b-black border-r-black border-t-black drop-shadow-lg px-5 py-3 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    <p className="font-rubik font-semibold text-md text-zinc-900">
                                        Learn More
                                    </p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 -z-20 w-full">
                <Scene />
            </div>
        </>
    )
}

export default Hero;