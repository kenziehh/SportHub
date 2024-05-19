import { PageProps, User } from "@/types";
import Dropdown from "../Dropdown";
import { Link } from "react-scroll";

import { Link as InertiaLink } from "@inertiajs/react";

const Navbar = ({ authenticated }: { authenticated: User }) => {
    return (
        <nav className="container flex items-center justify-between py-14 mb-2">
            <InertiaLink href="/" className="font-bold text-3xl">
                <img src="/assets/logo-nav.png" alt="" />
            </InertiaLink>
            <div className="hidden md:flex gap-8 items-center">
                <Link
                    to="news-section"
                    className="hover:text-blue-300"
                    smooth={true}
                    duration={500}
                >
                    News
                </Link>
                <Link
                    to="match-section"
                    className="hover:text-blue-300"
                    smooth={true}
                    duration={500}
                >
                    Match
                </Link>
                <Link
                    to="live-section"
                    className="hover:text-blue-300"
                    smooth={true}
                    duration={500}
                >
                    Live
                </Link>
            </div>
            {authenticated ? (
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                {authenticated.name}

                                <svg
                                    className="ms-2 -me-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route("profile.edit")}>
                            Profile
                        </Dropdown.Link>
                        <Dropdown.Link href={route("news.index")}>
                            Dashboard
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            ) : (
                // <Link
                //     href={route("dashboard")}
                //     className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                // >
                // </Link>
                <>
                    <div className="flex items-center gap-2">
                        <InertiaLink
                            href={route("login")}
                            className="rounded-3xl py-[14px] px-10 bg-lightBlack text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </InertiaLink>
                        {/* <InertiaLink
                            href={route("register")}
                            className="rounded-3xl py-[14px] px-10 bg-lightBlack text-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </InertiaLink> */}
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
