import React, { useContext } from 'react'
import ResumeContext from '../../context/ResumeContext'
import './ShowResume.css'

export default function ShowResume() {
    const { formData, downloadPDF } = useContext(ResumeContext);

    return (

        // <div id='form-container' class="container-fluid profile">
        //     <div class="container">
        //         <img src={formData.image} alt="" />
        //         {/* {formData.image && <img src={URL.createObjectURL(formData.image)} alt="img" style={{ maxWidth: '100%', marginTop: '10px' }} />} */}
        //         <div class="name">
        //             <h1>{formData.fullName}</h1>
        //             {/* <h6>WEB & GRAPHIC DESIGENR</h6> */}
        //         </div>

        //         <h2>Education:</h2>
        //         {formData.education.map((edu, index) => (
        //             <div key={index}>
        //                 <h3>{edu.learning}</h3>
        //                 <h3>{edu.timeFrameLearn}</h3>
        //             </div>
        //         ))}


        //         <h2>Experience:</h2>
        //         {formData.experience.map((exp, index) => (
        //             <div key={index}>
        //                 <h3>{exp.companyName}</h3>
        //                 <h3>{exp.timeFrameCompany}</h3>
        //             </div>
        //         ))}
        //     </div>
        //     <button onClick={() => downloadPDF()}>Download PDF</button>
        // </div>
        
        <div>
            {/* className="cv" id="resume-container" */}
        <div id='form-container' class="container-fluid profile"> 
            <section className="profile container_fluid text-light d-flex align-items-center">
                <div className="container d-flex">
                    <div className="header col-8 d-flex ">
                        {console.log(formData.image)}
                        <img src={formData.image} alt="" />
                        {/* {formData.image && (
                            <img
                                src={URL.createObjectURL(formData.image)}
                            />
                        )} */}
                        <div className="name p-4">
                        <h2>{formData.fullName}</h2>
                            {/* <h2>{formData.fullName}</h2> */}
                        </div>
                    </div>

                </div>
            </section>

            <section className="experience">
                <div className="container d-flex">
                    <div className="experience_flex col-8 p-4 ">
                        <h2>EXPERIENCE</h2>
                        {formData.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="experience_box d-flex">
                                    <div className="header_experience text-center">
                                        <h4>{exp.companyName}</h4>
                                        <p>{exp.timeFrameCompany}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="education">
                <div className="container d-flex">
                    <div className="education_flex col-12 p-5">
                        <h2>EDUCATION</h2>
                        {formData.education.map((edu, index) => (
                            <div key={index}>
                                <div className="education_box d-flex">
                                    <div className="header_education text-center">
                                        <h4>{edu.learning}</h4>
                                        <p>{edu.timeFrameLearn}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        {/* <button onClick={() => downloadPDF()}>Create PDF</button> */}
            <button onClick={() => downloadPDF()}>Download PDF</button>

    </div>
    )
}
