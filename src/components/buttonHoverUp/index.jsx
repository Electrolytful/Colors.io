import React from "react";
import './button.css';
import { useNavigate } from "react-router-dom";

const ButtonHoverUp = ({ text, link }) => {
    const navigate = useNavigate();
    return <button className="button" role="button" onClick={() => navigate(link)}>{text}</button>
}

export default ButtonHoverUp;
