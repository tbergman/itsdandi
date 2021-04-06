/** @jsx jsx */
import { jsx } from "theme-ui";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const VideoSection = ({ content }) => {
  const { inView, ref, entry } = useInView({});
  const videoPlayer = useRef(null);

  const { desktop_image, mobile_image, video_url } = content;

  useEffect(() => {
    // play video
    if (inView) {
      videoPlayer.current.play();
    }

    return () => {
      // clean up ?
    };
  }, [inView]);

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      ref={ref}
      className="VideoSection"
    >
      <div
        sx={{
          width: ["100vw", "100vw", "100vw", "1200px"],
          height: [
            "calc(100vw * .54)",
            "calc(100vw * .54)",
            "calc(100vw * .54)",
            "calc(1200px * .54)",
          ],
          position: "relative",
        }}
        className="VideoSection__container noOverflow"
      >
        <video
          ref={videoPlayer}
          width="73%"
          sx={{
            position: "absolute",
            top: "3%",
            left: "14%",
            zIndex: 11,
          }}
          loop={true}
          // autoPlay
          playsInlines
        >
          <source src={video_url} type="video/mp4"></source>
        </video>

        <picture className="containedPicture">
          <source media="(min-width: 800px)" srcSet={desktop_image}></source>
          <source srcSet={mobile_image}></source>
          <img src={desktop_image} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default VideoSection;
