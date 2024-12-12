import { useParams } from "react-router-dom";
import VideoController from "@/components/VideoController/index.jsx";
// import { useEffect, useState } from "react";

const CustomVideoPlayer = () => {
  let { videoUrl } = useParams();
  let decodedUrl = decodeURIComponent(videoUrl);

  // const [src, setSrc] = useState("");

  // useEffect(() => {
  //   switch (decodedUrl) {
  //     case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BEGINNER/MT5_mob.mp4":
  //       setSrc(
  //         "https://player.vdocipher.com/v2/?otp=20160313versUSE323YM1hLmIIm1Wm4IKkcDYKU45lnxuL6zLglF1yHVFmPzfB75&playbackInfo=eyJ2aWRlb0lkIjoiMzMwZDJmODRjMzk3NGM3ZjkzMjk2NzFjODhlNWNjNDUifQ=="
  //       );
  //       break;
  //     case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BEGINNER/forex_introduction.mp4":
  //       setSrc(
  //         "https://player.vdocipher.com/v2/?otp=20160313versUSE323u3qKfSrtsmPiD4i7ekcQJgOD4FlfIapR89yIv7ihfYe8q1&playbackInfo=eyJ2aWRlb0lkIjoiMDM4ZjczMTgwMGZlNDAyZjgxNjIyMjM2NzhhYzg3NjcifQ=="
  //       );
  //       break;

  //     default:
  //       setSrc(
  //         "https://player.vdocipher.com/v2/?otp=20160313versUSE323v0qk7rWf6atT13m9aZbbpUdopSvTrgl1zgd8ozNERnXcIK&playbackInfo=eyJ2aWRlb0lkIjoiMzk3N2M1MzgyODM2NDUzZjljZjc1ZjU5ODUwZjUwMWYifQ=="
  //       );
  //       break;
  //   }
  // }, []);

  // return (
  //   <iframe
  //     src={src}
  //     style={{
  //       border: 0,
  //       height: "100dvh",
  //       width: "100%",
  //       maxWidth: "100%",
  //     }}
  //     allowFullScreen={true}
  //     allow="encrypted-media"
  //   ></iframe>
  // );
  return <VideoController src={decodedUrl} />;
};

export default CustomVideoPlayer;
