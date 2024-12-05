import { useParams } from "react-router-dom";
import VideoController from "@/components/VideoController";

const CustomVideoPlayer = () => {
  let { videoUrl } = useParams();
  let decodedUrl = decodeURIComponent(videoUrl);

  return <VideoController src={decodedUrl} />;
};

export default CustomVideoPlayer;
