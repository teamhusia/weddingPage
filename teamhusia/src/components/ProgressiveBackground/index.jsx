import { useEffect, useState } from "react";

const ProgressiveBackground = ({ children, miniatureSrc, fullImageSrc }) => {
  const [backgroundURL, setBackgroundURL] = useState(miniatureSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = fullImageSrc;
  //   img.onload = () => {
  //     setBackgroundURL(fullImageSrc);
  //     setIsLoaded(true);
  //   };
  // }, [fullImageSrc]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100%"
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100%",
          position: "absolute",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: "scale(1.2)",
            backgroundColor: "#12172a",
            backgroundImage: `url(${backgroundURL})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: isLoaded ? "blur(7px)" : "blur(7px)",
            transition: "filter 1s background 1s background-color 1s",
            position: "fixed"
          }}
        ></div>
      </div>
      <div
        style={{
          zIndex: 5,
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ProgressiveBackground;
