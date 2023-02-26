import { useEffect, useRef, useState } from "react";

const RSVPForm = () => {
  const iframeRef = useRef();
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    console.log({ height });
  }, [height]);

  //   useEffect(() => {
  //     console.log("iframe", iframeRef.current.contentWindow.document.body);
  //     if (iframeRef) {
  //       iframeRef.current.style.height =
  //         iframeRef.current.contentWindow.document.body.scrollHeight + "px";
  //     }
  //   }, [iframeRef]);

  return (
    <div className="rsvp-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeX9eBlBjOn5i-bXgnlxpxCmWla33A2-18VnknggEwkyHzOBg/viewform?embedded=true"
        ref={iframeRef}
        title="rsvp-google-form"
        frameBorder="0"
        className="rsvp-iframe"
        onLoad={() => {
          const newH =
            iframeRef.current.contentWindow.document.body.scrollHeight + "px";
          console.log("log", { newH });

          setHeight(newH);
        }}
      >
        Ładuję…
      </iframe>
    </div>
  );
};

export default RSVPForm;
