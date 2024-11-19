const Profile = ({ student }) => {
    return (
      <div className="profile">
        <img src={`/profilepic/${student.profilePic}`} alt={student.firstName} />
      </div>
    );
  };
  
  export default Profile;