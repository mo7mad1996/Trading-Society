import { useParams } from "react-router-dom";
import VideoController from "@/components/VideoController/index.jsx";

const CustomVideoPlayer = () => {
  let { videoUrl } = useParams();
  let decodedUrl = decodeURIComponent(videoUrl);

  return (
    <iframe
      src="https://player.vdocipher.com/v2/?otp=20160313versUSE323v0qk7rWf6atT13m9aZbbpUdopSvTrgl1zgd8ozNERnXcIK&playbackInfo=eyJ2aWRlb0lkIjoiMzk3N2M1MzgyODM2NDUzZjljZjc1ZjU5ODUwZjUwMWYifQ=="
      style={{ border: 0, height: "100dvh", width: "100%", maxWidth: "100%" }}
      allowFullScreen={true}
      allow="encrypted-media"
    ></iframe>
  );
  // return <VideoController src={decodedUrl} />;
};

export default CustomVideoPlayer;
