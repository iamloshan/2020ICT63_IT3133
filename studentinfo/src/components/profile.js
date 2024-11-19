const Profile = ({ student }) => {
  return (
    <div className="profile">
      <div className="profile">
        <img
          src={`/profilepic/${student.profilePic}`}
          alt={student.firstName}
        />

        <table border={1}>
            <tr>
                <td>
                    ID : {student.studentId}
                </td>
            </tr>
            <tr>
                <td>
                    Full Name : {`${student.firstName} ${student.lastName}`}
                </td>
            </tr>
           
        </table>
      </div>
    </div>
  );
};

export default Profile;