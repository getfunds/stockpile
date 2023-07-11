import React from "react";
import styles from "../../styles/Transitions.module.css";

export default function Statistics() {
    return (
        <div className={`${styles.fadeInUp} bg-transparent mt-12 py-24 sm:py-32`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto p-[4px] rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 flex max-w-xs flex-col gap-y-4">
                        <div className="w-full h-full bg-white py-12 px-24 rounded-lg">
                            <dt className="text-base font-semibold leading-7 text-orange-500">Projects Raising</dt>
                            <dd className="order-first text-3xl font-bold font-rubik tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 sm:text-5xl">20</dd>
                        </div>
                    </div>
                    <div className="mx-auto p-[4px] rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 flex max-w-xs flex-col gap-y-4">
                        <div className="w-full h-full bg-white py-12 px-24 rounded-lg">
                            <dt className="text-base font-semibold leading-7 text-orange-500">Contributions</dt>
                            <dd className="order-first text-3xl font-bold font-rubik tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 sm:text-5xl">200</dd>
                        </div>
                    </div>
                    <div className="mx-auto p-[4px] rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 flex max-w-xs flex-col gap-y-4">
                        <div className="w-full h-full bg-white py-12 px-24 rounded-lg">
                            <dt className="text-base font-semibold leading-7 text-orange-500">Users Monthly</dt>
                            <dd className="order-first text-3xl font-bold font-rubik tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 sm:text-5xl">300</dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    )
}