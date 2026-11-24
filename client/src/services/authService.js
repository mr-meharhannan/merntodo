import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { auth } from "../context/context.jsx";



export const useAuthService = () => {
    const { setToken } = useContext(auth);
    const navigate = useNavigate();
    const Login = async (email, password) => {
        try {
            const response = await axios.post("http://localhost:5000/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            if (setToken) {
                setToken(response.data.token);
            }
            navigate("/");
            alert("Login Successful");
        } catch (err) {
            console.log(err.response?.data);
            console.log(err);
            alert("Login Failed");
        }
    }
    const Signup = async (username, email, password) => {
        try {
            await axios.post("http://localhost:5000/auth/register", {
                email,
                password,
                username,
            });
            alert("Signup Successful");
            const res = await axios.post("http://localhost:5000/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", res.data.token);
            if (setToken) {
                setToken(res.data.token);
            }
            navigate("/");
        } catch (err) {
            console.log(err.response?.data);
            console.log(err);
            alert("Signup Failed");
        }
    }
    const Logout = async () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/login");
    }
    return { Login, Signup, Logout }
}