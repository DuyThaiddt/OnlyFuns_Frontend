import React, { useState } from "react";
import { Link } from "react-router-dom";
import './FogotPassword.css'
import LongIconComponent from "../../components/LongIcon/LongIcon";
import { toast } from "react-toastify";
{/*
  * @des FogotPassword
  * @author Trinh Minh Phuc
  * @date 16/02/2024
*/}
const ForgotPassword = () => {
    const [email, setEmail] = useState(""); 
    const [validEmail, setValidEmail] = useState(true);

    const handleChange = (e) => {
        setEmail(e.target.value); 
    };

    const validateEmail = (email) => {
        // Regular expression for validating email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email format
        if (!email || !email.trim()) {
            toast.warning("Hãy nhập email");
            return;
        }
        setValidEmail(validateEmail(email));
        if (!validEmail) {
            toast.warn("Email không đúng định dạng");
            return;
        }
        console.log("Email submitted for password reset:", email);
    };

    return (
        <>
            <div className="logo">
                <LongIconComponent />
            </div>
            <div className="container">
                <div className="forgot-password">
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Reset Password
                        </button>
                    </form>
                    <div className="back-to-login">
                        <Link to="/login">Back to Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
