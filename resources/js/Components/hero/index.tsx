
const HeroSection = ({ text }: { text: string }) => {
    return (
        <section
            className="h-[58vh] flex justify-center items-center text-center"
            style={{
                backgroundImage: `url("/assets/news-hero.svg")
            `,
                backgroundRepeat: "no-repeat",
            }}
        >
            <h2 className="text-white text-[32px] md:text-[56px] max-w-[750px]">
                {text}
            </h2>
        </section>
    );
};

export default HeroSection;
