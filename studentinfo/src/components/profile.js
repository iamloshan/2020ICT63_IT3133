const Profile = ({ student }) => {
    return (
      <div className="">
        <img src={`/profilepic/${student.profilePic}`} alt={student.firstName} />
      </div>
    );
  };
  
  export default Profile;