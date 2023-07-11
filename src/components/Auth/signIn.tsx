import { FC, Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import styles from "../../styles/Transitions.module.css";

//TODO: Google-OAuth provider & Wallet implementation with Firebase Auth

interface SignInProps {
    open: boolean,
    setOpen: any,
}

const SignIn: FC<SignInProps> = ({ open, setOpen }) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string | undefined>();
    const { setVisible } = useWalletModal();
    const { connected } = useWallet();
    const cancelButtonRef = useRef(null);

    useEffect(() => {
        const checkConnected = () => {
            if (connected) {
                setOpen(false);
            }
        }
        checkConnected();
    }, [connected])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-zinc-800 bg-opacity-80 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className={styles.fadeInUp}>
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                            <img
                                                className="mx-auto h-10 w-auto"
                                                src="/logo.svg"
                                                alt="Stockpile"
                                            />
                                            <h2 className="mt-10 text-center text-2xl font-bold font-rubik leading-9 tracking-tight text-black">
                                                Sign in to your account
                                            </h2>
                                        </div>

                                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                            <form className="space-y-6" action="#" method="POST">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black font-rubik">
                                                        Email address
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-2 border-gray-100 bg-transparent py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-zinc-600 placeholder:text-slate-300 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex items-center justify-between">
                                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-black font-rubik">
                                                            Password
                                                        </label>
                                                        <div className="text-sm">
                                                            <a href="#" className="font-semibold text-orange-600 font-rubik hover:text-orange-500">
                                                                Forgot password?
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                            className="block w-full rounded-md border-2 border-gray-100 bg-transparent py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-zinc-600 placeholder:text-slate-300 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                                    >
                                                        Sign in
                                                    </button>
                                                    <div className="mt-2 px-6 sm:px-0 max-w-sm">
                                                        <button type="button" onClick={() => setVisible(true)} className="text-white text-center w-full bg-orange-600 hover:bg-orange-400/90 focus:ring-4 focus:outline-none focus:ring-gray-300/50 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                                                            <svg width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm8.706 19.517H10.34a.59.59 0 00-.415.17l-2.838 2.815a.291.291 0 00.207.498H21.66a.59.59 0 00.415-.17l2.838-2.816a.291.291 0 00-.207-.497zm-3.046-5.292H7.294l-.068.007a.291.291 0 00-.14.49l2.84 2.816.07.06c.1.07.22.11.344.11h14.366l.068-.007a.291.291 0 00.14-.49l-2.84-2.816-.07-.06a.59.59 0 00-.344-.11zM24.706 9H10.34a.59.59 0 00-.415.17l-2.838 2.816a.291.291 0 00.207.497H21.66a.59.59 0 00.415-.17l2.838-2.815A.291.291 0 0024.706 9z" fill="#FFF" fillRule="evenodd" /></svg>
                                                            Sign in with Solana
                                                            <div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                            <p className="mt-10 text-center text-sm text-black">
                                                Don't have an account?{' '}
                                                <a className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                                                    Sign-Up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog >
        </Transition.Root >
    )
}

export default SignIn;