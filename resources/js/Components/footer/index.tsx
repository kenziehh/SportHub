import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="container">
            <div
                style={{
                    backgroundImage: "url(/assets/footer.svg)",
                    backgroundRepeat: "no-repeat",
                }}
                className="container w-full h-full md:px-20 md:pb-[60px] py-32 md:pt-[132px]"
            >
                <div className="flex md:flex-row justify-between items-center md:justify-between md:items-center left-5 md:left-20 top-40 gap-3">
                    <div className="flex flex-col gap-6 self-end md:self-start ">
                        <img
                            src="/assets/logo-footer.png"
                            alt=""
                            className="w-48 md:w-full md:h-full"
                        />
                        <h4 className="text-sm md:text-xl text-grey">
                            Presenting Sports Beats
                            <br /> Every Second
                        </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="text-xl md:text-2xl text-grey">
                                Navigation
                            </h3>
                            <div className="flex flex-col md:   gap-1 text-white">
                                <Link href="/news" className="text-xl">
                                    News
                                </Link>
                                <Link href="/match" className="text-xl">
                                    Match
                                </Link>
                                <Link href="/highlight" className="text-xl">
                                    Highlight
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex flex-col gap-2 hidden">
                        <h3 className="text-sm md:text-2xl text-grey">
                            Location
                        </h3>
                        <div className="flex flex-col gap-1 text-white">
                            <Link href="" className="text-xs md:text-xl">
                                Aleksandra 3V
                            </Link>
                            <Link href="" className="text-xs md:text-xl">
                                Malang City
                            </Link>
                            <Link href="" className="text-xs md:text-xl">
                                Indonesia
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col gap-11">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl text-darkGrey text-right">
                                Follow Us
                            </h3>
                            <p className="text-white text-sm md:text-xl self-end">
                                Instagram / Twitter /<br /> Telegram / Youtube
                            </p>
                        </div>
                        <p className="text-sm text-darkGrey">
                            © 2024 Sporthub. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
