import { useRef } from "react";

const RSVPForm = () => {
  const iframeRef = useRef();

  return (
    <div className="rsvp-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeX9eBlBjOn5i-bXgnlxpxCmWla33A2-18VnknggEwkyHzOBg/viewform?embedded=true"
        ref={iframeRef}
        title="rsvp-google-form"
        frameBorder="0"
        className="rsvp-iframe"
      >
        Ładuję…
      </iframe>
    </div>
  );
};

export default RSVPForm;
