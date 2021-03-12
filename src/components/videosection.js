/** @jsx jsx */
import { jsx } from "theme-ui";

const VideoSection = ({ content }) => {
  const { desktop_image, mobile_image, video_url } = content;
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      className="VideoSection"
    >
      <div
        sx={{
          width: ["1200px"],
          height: ["calc(1200px * .54)"],
          position: "relative",
        }}
        className="VideoSection__container noOverflow"
      >
        <video
          width="73%"
          sx={{
            position: "absolute",
            top: "3%",
            left: "14%",
            zIndex: 11,
          }}
          loop={true}
          autoPlay
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
