import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId }: { videoId: string }) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });
    const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isLargeScreen = useMediaQuery({ minWidth: 1024, maxWidth: 1200 });
    let opts = {};
    if (isSmallScreen) {
        opts = {
            width: "100%",
            height: "200px",
        };
    } else if (isMediumScreen) {
        opts = {
            width: "700px",
            height: "400px",
        };
    } else if (isLargeScreen) {
        opts = {
            width: "1000",
            height: "700px",
        };
    } else {
        opts = {
            width: "850px",
            height: "500px",
        };
    }
    return <YouTube videoId={videoId} opts={opts} />;
};

export default YoutubePlayer;
