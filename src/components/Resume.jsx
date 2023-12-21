import React, { useContext, useState } from 'react';
import ResumeContext from '../context/ResumeContext';
import { getResume } from './fireBase/fireBaseConfig';
import ShowResume from './showResume/ShowResume';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import UpImage from './ImageUrl';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import './resume.css'
import SignOut from './fireBase/SignOut';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>

export default function ResumeForm() {
    const { userLogin, formData, setFormData, handleChange, handleExperienceChange, handleEducationChange, handleImageChange, submitHandler } = useContext(ResumeContext);


    /*
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    module.exports = {
        // ...
        plugins: [
            // ...
            require('@tailwindcss/forms'),
        ],
    }
    ```
    */


    return (

        <>
            <form>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <SignOut />
                </div>
                <h1> Create Resume</h1>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                        <div className="mt-10  grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Full Name:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <br />
                            <h2 className='font-semibold'>Experience: </h2>
                            {formData.experience.map((exp, index) => (
                                <div className="sm:col-span-4">
                                    <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Company Name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="companyName"
                                            name="companyName"
                                            type="text"
                                            autoComplete="companyName"
                                            defaultValue={exp.companyName}
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                    </div>
                                    <label htmlFor="timeFrameLearn" className="block text-sm font-medium leading-6 text-gray-900">
                                        Time Frame:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="timeFrameCompany"
                                            name="timeFrameCompany"
                                            type="text"
                                            autoComplete="timeFrameCompany"
                                            defaultValue={exp.timeFrameCompany}
                                            onChange={(e) => handleExperienceChange(e, index)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />

                                    </div>
                                </div>))}
                            <button
                                type="button"
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                onClick={() =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        experience: [...prevData.experience, { companyName: '', timeFrameCompany: '' }],
                                    }))
                                }
                            >
                                Add Experience:
                            </button>
                        </div>
                    </div>
                </div>
                <h2 className='font-semibold'>Education: </h2>
                {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Education</h2> */}
                {formData.education.map((edu, index) => (
                    <div className="sm:col-span-4">
                        <label htmlFor="learning" className="block text-sm font-medium leading-6 text-gray-900">
                            Learning:
                        </label>
                        <div className="mt-2">
                            <input
                                id="learning"
                                name="learning"
                                type="text"
                                autoComplete="learning"
                                defaultValue={edu.learning}
                                onChange={(e) => handleEducationChange(e, index)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                        <label htmlFor="timeFrameLearn" className="block text-sm font-medium leading-6 text-gray-900">
                            Time Frame:
                        </label>
                        <div className="mt-2">
                            <input
                                id="timeFrameLearn"
                                name="timeFrameLearn"
                                type="text"
                                autoComplete="timeFrameLearn"
                                defaultValue={edu.timeFrameLearn}
                                onChange={(e) => handleEducationChange(e, index)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                        </div>
                    </div>))}
                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() =>
                        setFormData((prevData) => ({
                            ...prevData,
                            education: [...prevData.education, { learning: '', timeFrameLearn: '' }],
                        }))
                    }
                >
                    Add Education:
                </button>



                <div className="col-span-full">
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                            <UpImage />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="button" onClick={submitHandler}>submit pdf</button>
                    <br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/showAllCV"> show all CV</Link>

                </div>
            </form>


        </>

        // <div >
        //     <h1>Resume Form</h1>
        //     <form className="add">
        //     {console.log(userLogin?.uid)}
        //         <label>
        //             Full Name:
        //             <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        //         </label>
        //         <br />

        //         <h2>Experience</h2>
        //         {formData.experience.map((exp, index) => (
        //                 <div key={index}>
        //                     <label>
        //                         Company Name:
        //                         <input
        //                             type="text"
        //                             name="companyName"
        //                             value={exp.companyName}
        //                             onChange={(e) => handleExperienceChange(e, index)} />
        //                     </label>
        //                     <br />
        //                     <label>
        //                         Time Frame:
        //                         <input
        //                             type="text"
        //                             name="timeFrameCompany"
        //                             value={exp.timeFrameCompany}
        //                             onChange={(e) => handleExperienceChange(e, index)} />
        //                 </label>
        //                 <br />
        //             </div>
        //         ))}
        //         <button
        //             type="button"
        //             onClick={() => setFormData((prevData) => ({ ...prevData, experience: [...prevData.experience, { companyName: '', timeFrameCompany: '' }] }))}>
        //             Add Experience
        //         </button>
        //         <br />

        //         <h2>Education</h2>
        //         {formData.education.map((edu, index) => (
        //                 <div key={index}>
        //                     <label>
        //                         Learning:
        //                         <input
        //                             type="text"
        //                             name="learning"
        //                             value={edu.learning}
        //                             onChange={(e) => handleEducationChange(e, index)} />
        //                     </label>
        //                     <br />
        //                     <label>
        //                         Time Frame:
        //                         <input
        //                             type="text"
        //                         name="timeFrameLearn"
        //                         value={edu.timeFrameLearn}
        //                         onChange={(e) => handleEducationChange(e, index)} />
        //                 </label>
        //                 <br />
        //             </div>
        //         ))}
        //         <button
        //             type="button"
        //             onClick={() => setFormData((prevData) => ({ ...prevData, education: [...prevData.education, { learning: '', timeFrameLearn: '' }] }))}>
        //             Add Education
        //         </button>
        //         <br />
        //         <UpImage/>
        //         <br />
        //         <button type="button" onClick={submitHandler}>submit pdf</button>
        //     </form>
        //     <Link to="/showAllCV"> show all CV</Link>
        // </div>





    )
}






