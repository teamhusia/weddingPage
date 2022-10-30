const Profile = ({ name, url, lang, phoneNo }) => {
  return (
    <div className="contact-profile">
      <img src={url} className="profile-picture" />
      <h2>{name}</h2>
    </div>
  );
};

export default Profile;
