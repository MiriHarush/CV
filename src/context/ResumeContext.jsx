import { createContext, useEffect, useState } from "react";
import html2pdf from 'html2pdf.js';
import { addResumePdf, getResume } from "../components/fireBase/fireBaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { get } from "mongoose";


const ResumeContext = createContext();

const Provider = ({ children }) => {
    // const navigate = useNavigate();

    const [arrCV, setArrCV] = useState([]);
    const [userLogin, setUserLogin] = useState("");
    const [formData, setFormData] = useState({
        fullName: '',
        experience: [{
            companyName: '',
            timeFrameCompany: ''
        }],
        education: [{
            learning: '',
            timeFrameLearn: ''
        }],
        // image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleExperienceChange = (e, index) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            experience: prevData.experience.map((experience, i) => i === index ? { ...experience, [name]: value } : experience)
        }));
    };

    const handleEducationChange = (e, index) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            education: prevData.education.map((education, i) => i === index ? { ...education, [name]: value } : education)
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            image: file
        }));
    };
    const auth = getAuth();


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLogin(user)
                console.log(userLogin);
            }
            else {
                console.log("user is not connected");
                setUserLogin(null)
            }
        })
        return () => {
        };
    }, []);

useEffect(() => {
    const getAllCV = async() => {
        let temp = await getResume(userLogin?.uid)
        console.log(temp)
        setArrCV(temp)
        
    }
    getAllCV()
}    ,[userLogin])  

console.log(arrCV)
    // 
    //     const getCV = async () => {


    //         console.log(await getResume(userLogin?.uid))
    //     }
    //     getCV()
    //     return () => {

    //     };
    // }, [])

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(formData);

    // }



    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        addResumePdf({ ...formData, ownerId: userLogin?.uid });
        navigate("/showCV")
    };

    const downloadPDF = () => {
        const element = document.getElementById('form-container');
        html2pdf(element, {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });

    }

    const shared = { userLogin, formData, setFormData, handleChange, handleExperienceChange, handleEducationChange, handleImageChange, submitHandler, downloadPDF,arrCV }


    return (
        <ResumeContext.Provider value={shared}>
            {children}
        </ResumeContext.Provider>)
}

export { Provider }
export default ResumeContext;