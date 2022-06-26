import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function TaTeacherdetails() {
  const [teachers, setTeachers] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const { enrolid } = user.enrolid;
  useEffect(() => {
    // const response = await axios.get(
    //   "http://localhost:5000/api/get/teacherdetail",
    //   { enrolid }
    // );
    // const data = response.data;
    // setTeachers(data);
    axios
      .get("http://localhost:5000/api/get/teacherdetail", { enrolid })
      .then((res) => {
        setTeachers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col text-xl justify-center items-center p-20">
      Teachers data
      <table className="m-5">
        <tr>
          <th className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
            Name
          </th>
          <th className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
            Enrolment Id
          </th>
          <th className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
            School
          </th>
          <th className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
            Subject
          </th>
        </tr>
        {teachers &&
          teachers.map((item, i) => (
            <tr key={i}>
              <td className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
                {item.name}
              </td>
              <td className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
                {item.enrolid}
              </td>
              <td className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
                {item.school}
              </td>
              <td className="border-2 border-color-grey-800 border-opacity-20 px-8 py-2">
                {item.subject}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default TaTeacherdetails;
