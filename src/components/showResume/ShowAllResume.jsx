import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ResumeContext from '../../context/ResumeContext';
import ShowResume from './ShowResume';

export default function ShowAllResume() {
    const navigate = useNavigate();
    const { arrCV, setFormData } = useContext(ResumeContext);
    const all = (resume) => {
        setFormData(resume)
       navigate("/showCV")
    }

    return (
        <div>
            <h1>All resumes</h1>
            <br />
            {arrCV?.map((cv, index) => {
  return <button onClick={()=> all(cv)}>{`cv ${index+1}`}</button>

            })}
        </div>
    )
}
