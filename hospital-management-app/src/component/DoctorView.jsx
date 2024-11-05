import React, { useState } from 'react';
import DocHeader from './DocHeader';
import { Modal, Button } from 'react-bootstrap';

const DoctorView = () => {
    const [data, changeData] = useState([
        {
            "Subscriber": "Orthopedics",
            "imglink": "https://media.istockphoto.com/id/1370095638/photo/doctor-check-and-diagnose-the-human-spine-on-blurred-background.jpg?s=612x612&w=0&k=20&c=OiJ-9mSOI-lr2iHJ2g4FwVL_403ZJioR50Ti_88G_p4=",
            "details": "Orthopedics focuses on the musculoskeletal system, addressing issues related to bones, joints, ligaments, and muscles. Orthopedic surgeons treat injuries like fractures and perform surgeries such as joint replacements and corrective bone procedures."
        },
        {
            "Subscriber": "Cardiologist",
            "imglink": "https://southdenver.com/wp-content/uploads/2021/09/invasive-cardiology.jpg",
            "details": "Cardiology is dedicated to heart health, treating conditions such as heart disease, arrhythmias, and hypertension. Cardiologists perform diagnostic tests like ECGs and manage therapies to improve cardiovascular function."
        },
        {
            "Subscriber": "Gynecologist",
            "imglink": "https://www.ogstulsa.com/wp-content/uploads/2024/02/gynecologist-1.jpg",
            "details": "Gynecology covers women's reproductive health, addressing conditions related to the uterus, ovaries, and breasts. Gynecologists provide routine screenings, reproductive health care, and manage disorders such as PCOS and fibroids."
        },
        {
            "Subscriber": "Neurologist",
            "imglink": "https://d1zejd6fk5zfu2.cloudfront.net/sites/neurology/files/styles/large/public/images/2019-05/shutterstock_719796733_brain.jpg?itok=v1mbAZzv",
            "details": "Neurology deals with disorders of the nervous system, including the brain and spinal cord. Neurologists diagnose and treat conditions like epilepsy, multiple sclerosis, and Parkinson’s disease, using techniques like EEGs and MRIs."
        },
        {
            "Subscriber": "Radiologist",
            "imglink": "https://drjathinsveincenter.com/wp-content/uploads/2022/03/What-Is-Interventional-Radiology-And-How-Does-It-Work-1.jpg",
            "details": "Radiology involves the use of medical imaging to diagnose and treat diseases within the body. Radiologists interpret X-rays, MRIs, and CT scans to provide insights on internal health issues, supporting other specialists in their diagnoses."
        },
        {
            "Subscriber": "Surgeon",
            "imglink": "https://www.meitra.com/public/upload_file/631078e84cea61662023912.jpg",
            "details": "Surgeons perform operations to treat diseases, repair injuries, and improve bodily functions. They specialize in areas such as general surgery, trauma surgery, and minimally invasive techniques, ensuring precision in procedures."
        },
        {
            "Subscriber": "Psychologist",
            "imglink": "https://bouve.northeastern.edu/wp-content/uploads/2024/01/What-Is-Applied-Psychology-Hero-Image.jpg",
            "details": "Psychologists focus on mental health and behavior, helping individuals manage stress, anxiety, and other mental health challenges. They conduct therapy sessions, behavioral assessments, and design personalized mental health plans."
        },
        {
            "Subscriber": "Pathologist",
            "imglink": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Pathologists_looking_into_microscopes_%281%29.jpg",
            "details": "Pathology involves studying tissues, organs, and body fluids to understand disease causes and effects. Pathologists analyze samples from biopsies and conduct autopsies to provide insights that support medical diagnoses."
        }
    ]);

    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const handleButtonClick = (department) => {
        setSelectedDepartment(department);
    };

    const handleClose = () => {
        setSelectedDepartment(null);
    };

    return (
        <div>
            <DocHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map((value, index) => (
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                                    <div className="card">
                                        <img height="350" src={value.imglink} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.Subscriber}</h5>
                                            <p className="card-text"></p>
                                            <Button variant="primary" onClick={() => handleButtonClick(value)}>
                                                {value.Subscriber}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedDepartment && (
                <Modal show={true} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedDepartment.Subscriber}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{selectedDepartment.details}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default DoctorView;