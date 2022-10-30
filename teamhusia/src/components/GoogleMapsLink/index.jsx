import "./GoogleMapsLink.css";

const GoogleMapsLink = ({ url }) => {
  return (
    <a className="google-maps-btn" href={url} target="#">
      Open in Google Maps
    </a>
  );
};

export default GoogleMapsLink;
