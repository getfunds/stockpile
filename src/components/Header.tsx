import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { IconBolt, IconLogin, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SignIn from "./Auth/signIn";

export function Header() {
    const [open, setOpen] = useState(false);
    const { connected, publicKey, disconnect } = useWallet();

    return (
        <>
            {open ? (
                <SignIn open={open} setOpen={setOpen} />
            ) : null}
            <nav className="sticky top-5 w-10/12 rounded-2xl z-50 mr-auto ml-auto bg-white backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200">
                <div className="w-full mx-auto px-4">
                    <div className="grid grid-cols-3 items-center h-16">
                        <div className="flex space-x-4 text-gray-900 justify-start">
                            <div className="hover:bg-orange-300/25 rounded-xl p-2">
                                <a className="font-rubik font-semibold text-sm" href="/explore">Explore</a>
                            </div>
                            <div className="hover:bg-orange-300/25 rounded-xl p-2">
                                <a className="font-rubik font-semibold text-sm" href="#">Rounds</a>
                            </div>
                            <div className="hover:bg-orange-300/25 rounded-xl p-2">
                                <a className="font-rubik font-semibold text-sm" href="#">Create</a>
                            </div>
                        </div>
                        <div className="justify-self-center">
                            <Link href="/" className="block mx-auto">
                                <Image
                                    priority
                                    src="/logo.svg"
                                    alt="Stockpile"
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                        <div className="flex space-x-4 justify-end">
                            <div className="flex items-center border-slate-900 rounded-xl p-2 hover:bg-orange-300/25">
                                <a href="#">
                                    <IconBolt size={26} color="gray" />
                                </a>
                            </div>
                            {connected ? (
                                <a onClick={() => disconnect()}>
                                    <div className="flex space-x-2 items-center rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 px-3.5 py-2.5 shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                        <IconLogout size={24} color="white" />
                                        <p
                                            className="text-sm font-rubik font-semibold text-white pointer-events-none"
                                        >
                                            Sign-Out
                                        </p>
                                    </div>
                                </a>
                            ) : (
                                <a onClick={() => setOpen(true)}>
                                    <div className="flex space-x-2 items-center rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 px-3.5 py-2.5 shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                        <IconLogin size={24} color="white" />
                                        <p
                                            className="text-sm font-rubik font-semibold text-white pointer-events-none"
                                        >
                                            Sign-In
                                        </p>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>
                </div >
            </nav >
        </>
    );
}

export default Header;