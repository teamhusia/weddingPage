const Image = ({ src, width, height }) => {
  return (
    <div
      className="roadmap-banner"
      style={{
        // width: width,
        height: height,
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    ></div>
  );
};

export default Image;
