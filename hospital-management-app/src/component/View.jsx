import React, { useState } from 'react'
import SubHeader from './SubHeader'


const View = () => {
    const [data, changeData] = useState(
        [
            { "Subscriber": "Orthopedics", "imglink": "https://media.istockphoto.com/id/1370095638/photo/doctor-check-and-diagnose-the-human-spine-on-blurred-background.jpg?s=612x612&w=0&k=20&c=OiJ-9mSOI-lr2iHJ2g4FwVL_403ZJioR50Ti_88G_p4=" },
            { "Subscriber": "Cardiologist", "imglink": "https://southdenver.com/wp-content/uploads/2021/09/invasive-cardiology.jpg" },
            { "Subscriber": "Gynecologist", "imglink": "https://www.ogstulsa.com/wp-content/uploads/2024/02/gynecologist-1.jpg" },
            { "Subscriber": "Neurologist", "imglink": "https://d1zejd6fk5zfu2.cloudfront.net/sites/neurology/files/styles/large/public/images/2019-05/shutterstock_719796733_brain.jpg?itok=v1mbAZzv" },
            { "Subscriber": "Radiologist", "imglink": "https://drjathinsveincenter.com/wp-content/uploads/2022/03/What-Is-Interventional-Radiology-And-How-Does-It-Work-1.jpg" },
            { "Subscriber": "Surgeon", "imglink": "https://www.meitra.com/public/upload_file/631078e84cea61662023912.jpg" },
            { "Subscriber": "Psychologist", "imglink": "https://bouve.northeastern.edu/wp-content/uploads/2024/01/What-Is-Applied-Psychology-Hero-Image.jpg" },
            { "Subscriber": "Pathologist", "imglink": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Pathologists_looking_into_microscopes_%281%29.jpg" }
        ]
    )
    return (
        <div>
            <SubHeader />
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                        <div class="row g-3">

                            {data.map(
                                (value, index) => {
                                    return <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img height="350" src={value.imglink}
                                                class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title"></h5>
                                                <p class="card-text"></p>
                                                <a href="#" class="btn btn-primary">{value.Subscriber}</a>
                                            </div>
                                        </div>

                                    </div>
                                }
                            )}







                        </div>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default View