import React from "react";
import { useRef, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function SignUp() {
  const [samasya, setSamasya] = useState("");
  const [role, setRole] = useState("teacher");
  const nameRef = useRef("");
  const schoolRef = useRef("");
  const subjectRef = useRef("");
  const enrolidRef = useRef("");
  const passwordRef = useRef("");
  const taenrolidRef = useRef("");
  const confirmPasswordRef = useRef("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).superpass}`,
      },
    };
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setSamasya("Passwords do not match");
      return;
    }
    if (role === "admin") {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        config,
        {
          name: nameRef.current.value,
          enrolid: enrolidRef.current.value,
          password: passwordRef.current.value,
          role: role,
          superpass: process.env.SUPERPASS,
        }
      );
      console.log(response.data);
    } else if (role === "ta") {
      axios
        .post("http://localhost:5000/api/users/register", config, {
          name: nameRef.current.value,
          enrolid: taenrolidRef.current.value,
          password: passwordRef.current.value,
          role: role,
        })
        .then((res) => {
          setSamasya("");
        })
        .catch((err) => {
          setSamasya(err.response.data.message);
        });
    } else {
      axios
        .post("http://localhost:5000/api/users/register", config, {
          name: nameRef.current.value,
          enrolid: enrolidRef.current.value,
          password: passwordRef.current.value,
          role: role,
          school: schoolRef.current.value,
          subject: subjectRef.current.value,
          ta_assigned: taenrolidRef.current.value,
        })
        .then((res) => {
          setSamasya("");
        })
        .catch((err) => {
          setSamasya(err.response.data.message);
        });
    }
  };

  return (
    <div>
      <div className="w-screen flex flex-col justify-start items-center overscroll-x-hidden min-h-screen">
        <div className="flex flex-col bg-primary shadow-pn  rounded-lg p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans">
          <div className="font-medium text-xl tb:text-3xl text-center">
            Register
          </div>
          {samasya && (
            <p className="text-sm tb:text-lg font-sans text-secondary-brightred text-center">
              {samasya}
            </p>
          )}
          <label htmlFor="name" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Name:
          </label>
          <input
            type="text"
            name="name"
            ref={nameRef}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
          ></input>
          <label htmlFor="enrolid" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Enrolment Id:
          </label>
          <input
            type="text"
            name="enrolid"
            ref={enrolidRef}
            className="mt-1 tb:mt-2 mb-5 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
          ></input>
          <span>
            <label htmlFor="role" className="mt-8 tb:mt-5 text-md tb:text-xl">
              Role:
            </label>
            <form
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <input type="radio" name="role" value="teacher" />
              <label className="mx-5" htmlFor="teacher">
                Teacher
              </label>
              <input type="radio" name="role" value="admin" />
              <label className="mx-5" htmlFor="admin">
                Admin
              </label>
              <input type="radio" name="role" value="ta" />
              <label className="mx-5" htmlFor="ta">
                Teaching Assistant
              </label>
            </form>
          </span>
          {role === "teacher" && (
            <>
              <label
                htmlFor="school"
                className="mt-3 tb:mt-5 text-md tb:text-xl"
              >
                School:
              </label>
              <input
                type="text"
                name="school"
                ref={schoolRef}
                className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
              ></input>
              <label
                htmlFor="subject"
                className="mt-3 tb:mt-5 text-md tb:text-xl"
              >
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                ref={subjectRef}
                className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
              ></input>
              <label
                htmlFor="taenrolid"
                className="mt-3 tb:mt-5 text-md tb:text-xl"
              >
                TA Enrolment Id:
              </label>
              <input
                type="text"
                name="taenrolid"
                ref={taenrolidRef}
                className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
              ></input>
            </>
          )}
          <label htmlFor="password" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Create password:
          </label>
          <input
            type="password"
            name="pass"
            ref={passwordRef}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
          ></input>
          <label
            htmlFor="confirmpass"
            className="mt-3 tb:mt-5 text-md tb:text-xl"
          >
            Confirm password:
          </label>
          <input
            type="password"
            name="confirmpass"
            ref={confirmPasswordRef}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
          ></input>
          <button
            type="submit"
            onClick={(e) => {
              if (
                passwordRef.current.value !== confirmPasswordRef.current.value
              ) {
                e.preventDefault();
                setSamasya("Passwords did not match");
              } else if (
                nameRef.current.value === "" ||
                enrolidRef.current.value === "" ||
                passwordRef.current.value === "" ||
                confirmPasswordRef.current.value === ""
              ) {
                setSamasya("Please fill all the fields");
              } else {
                handleSubmit(
                  e,
                  nameRef.current.value,
                  enrolidRef.current.value,
                  passwordRef.current.value
                );
              }
            }}
            className="mt-4 tb:mt-8 w-28 tb:w-36 h-8 tb:h-10 bg-secondary-red items-center rounded-md shadow-md text-primary text-md tb:text-xl font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
