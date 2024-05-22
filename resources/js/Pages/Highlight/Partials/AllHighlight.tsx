import HighlightCard from "@/Components/card/highligt";
import Pagination from "@/Components/pagination";
import { HighlightResponse, Meta } from "@/types/responseData";

const AllHighlight = ({
    highlights,
    links,
}: {
    highlights: HighlightResponse[];
    links: Meta;
}) => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-between gap-20 py-20">
                <HighlightCard youtubeId="rXBGr2EpM5M" title="City Vs Madrid" />
                <HighlightCard youtubeId="rXBGr2EpM5M" title="City Vs Madrid" />
                <HighlightCard youtubeId="rXBGr2EpM5M" title="City Vs Madrid" />
                <HighlightCard youtubeId="rXBGr2EpM5M" title="City Vs Madrid" />
                <HighlightCard youtubeId="rXBGr2EpM5M" title="City Vs Madrid" />
                <HighlightCard youtubeId="rXBGr2EpM5M" title="City Vs Madrid" />
            </section>
            <Pagination links={links.links} />
        </>
    );
};

export default AllHighlight;
