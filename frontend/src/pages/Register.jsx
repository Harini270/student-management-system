import { useState } from "react";

import API from "../api";

import { useNavigate, Link } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            password: ""
        });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await API.post("/auth/register", formData);

        alert("Registration Successful");
        navigate("/");

    } catch (err) {
        console.error(err);

        if (err.response) {
            alert(err.response.data.message || JSON.stringify(err.response.data));
        } else {
            alert("Cannot connect to backend");
        }
    }
};

    return (

        <div>

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <button>
                    Register
                </button>
                <p>
                    Already have an account?{" "}
                    <Link to="/">Login</Link>
                </p>
            </form>

        </div>
    );
}

export default Register;
