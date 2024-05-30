const Marque = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="overflow-hidden bg-[#DCDCDC] rounded-3xl py-3">
            <div className="animate-marquee">
                <div className="inline-block whitespace-nowrap">{children}</div>
            </div>
        </div>
    );
};

export default Marque;
