import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

// interface Opts {
//     width: string;
//     height: string;
// }
const YoutubePlayer = ({
    videoId,
    width = "100%",
    height,
    className = "",
}: {
    videoId: string;
    width?: string;
    height: string;
    className?: string;
}) => {
    let optsVar = {
        width: width,
        height: height,
    };
    return <YouTube videoId={videoId} opts={optsVar} className={className} />;
};

export default YoutubePlayer;
