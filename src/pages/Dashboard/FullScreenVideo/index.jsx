import { useParams } from "react-router-dom";
import VideoController from "@/components/VideoController/index.jsx";

const CustomVideoPlayer = () => {
  let { videoUrl } = useParams();
  let decodedUrl = decodeURIComponent(videoUrl);
  const videoUrlWithCacheBypass = `${decodedUrl}?cache_bypass=${new Date().getTime()}`;

  return <VideoController src={videoUrlWithCacheBypass} />;
};

export default CustomVideoPlayer;
