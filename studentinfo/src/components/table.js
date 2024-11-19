const Table = ({ students }) => {
    return (
      <table border={1}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Course</th>
          <th>Country</th>
          <th>Profile</th>
        </tr>
  
        {students.map((student, i) => (
          <tr>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.course}</td>
            <td>{student.country}</td>
            <td>
              <button> View</button>
            </td>
          </tr>
        ))}
      </table>
    );
  };
  
  export default Table;