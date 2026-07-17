
import { useEffect, useState } from "react";

import API from "../api";

function Dashboard() {

    const [students, setStudents] =
        useState([]);

    const [formData, setFormData] =
        useState({
            student_name: "",
            department: "",
            year: "",
            register_number: "",
            email: ""
        });

    const fetchStudents = async () => {

        const res =
            await API.get("/students");

        setStudents(res.data);
    };

    useEffect(() => {

        fetchStudents();

    }, []);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await API.post(
            "/students",
            formData
        );

        alert("Student Added");

        fetchStudents();

        setFormData({
            student_name: "",
            department: "",
            year: "",
            register_number: "",
            email: ""
        });
    };

    return (

        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f1f5f9",
                padding: "30px",
                fontFamily: "Arial"
            }}
        >

            <h1
                style={{
                    textAlign: "center",
                    color: "#2563eb",
                    marginBottom: "30px"
                }}
            >
                Student Management Dashboard - Git Practice
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "30px"
                }}
            >

                {/* FORM SECTION */}

                <div
                    style={{
                        flex: 1,
                        backgroundColor: "white",
                        padding: "25px",
                        borderRadius: "10px",
                        boxShadow:
                            "0px 2px 10px rgba(0,0,0,0.1)"
                    }}
                >

                    <h2
                        style={{
                            marginBottom: "20px",
                            color: "#1e293b"
                        }}
                    >
                        Add Student
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="student_name"
                            placeholder="Student Name"
                            value={formData.student_name}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            style={inputStyle}
                        >

                            <option value="">
                                Select Department
                            </option>

                            <option value="CSE">
                                CSE
                            </option>

                            <option value="IT">
                                IT
                            </option>

                            <option value="ECE">
                                ECE
                            </option>

                            <option value="EEE">
                                EEE
                            </option>

                            <option value="MECH">
                                MECH
                            </option>

                        </select>


                        <input
                            type="text"
                            name="year"
                            placeholder="Year"
                            value={formData.year}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <input
                            type="text"
                            name="register_number"
                            placeholder="Register Number"
                            value={formData.register_number}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                        />

                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "12px",
                                backgroundColor: "#2563eb",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                fontSize: "16px",
                                cursor: "pointer"
                            }}
                        >
                            Add Student
                        </button>

                    </form>

                </div>

                {/* STUDENT LIST */}

                <div
                    style={{
                        flex: 1,
                        backgroundColor: "white",
                        padding: "25px",
                        borderRadius: "10px",
                        boxShadow:
                            "0px 2px 10px rgba(0,0,0,0.1)",
                        maxHeight: "700px",
                        overflowY: "auto"
                    }}
                >

                    <h2
                        style={{
                            marginBottom: "20px",
                            color: "#1e293b"
                        }}
                    >
                        Students List
                    </h2>

                    {
                        students.length === 0 ? (

                            <p>No Students Added</p>

                        ) : (

                            students.map((student) => (

                                <div
                                    key={student.id}
                                    style={{
                                        backgroundColor: "#f8fafc",
                                        padding: "15px",
                                        borderRadius: "8px",
                                        marginBottom: "15px",
                                        borderLeft:
                                            "5px solid #2563eb"
                                    }}
                                >

                                    <h3
                                        style={{
                                            color: "#2563eb",
                                            marginBottom: "10px"
                                        }}
                                    >
                                        {student.student_name}
                                    </h3>

                                    <p>
                                        <strong>Department:</strong>
                                        {" "}
                                        {student.department}
                                    </p>

                                    <p>
                                        <strong>Year:</strong>
                                        {" "}
                                        {student.year}
                                    </p>

                                    <p>
                                        <strong>Register No:</strong>
                                        {" "}
                                        {student.register_number}
                                    </p>

                                    <p>
                                        <strong>Email:</strong>
                                        {" "}
                                        {student.email}
                                    </p>

                                </div>
                            ))
                        )
                    }

                </div>

            </div>

        </div>
    );
}

const inputStyle = {

    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    boxSizing: "border-box"
};

export default Dashboard;

