import { IconArrowBigUpLines, IconReceipt, IconTopologyStar3 } from "@tabler/icons-react";
import React from "react";

export default function Features() {
    return (
        <div className="overflow-hidden bg-transparent py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-5xl font-technorbold font-bold tracking-wide text-gray-900 sm:text-4xl">Funding The Future</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">The top crowdfunding experience on Solana, with the largest suite of features and tools for projects and contributors alike.</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-bold text-gray-900">
                                        <IconTopologyStar3 size={20} color="orange" className="absolute left-1 top-1" />
                                        Open Grants. {" "}
                                    </dt>
                                    <dd className="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-bold text-gray-900">
                                        <IconReceipt size={20} color="orange" className="absolute left-1 top-1" />
                                        Commemorative NFTs. {" "}
                                    </dt>
                                    <dd className="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-bold text-gray-900">
                                        <IconArrowBigUpLines size={20} color="orange" className="absolute left-1 top-1" />
                                        Reputation Tracking. {" "}
                                    </dt>
                                    <dd className="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <img src="https://i.imgur.com/dyUpBxH.png" alt="Preview screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                </div>
            </div>
        </div>
    )
}