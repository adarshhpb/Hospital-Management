import React, { useState } from 'react'
import SubHeader from './SubHeader'


const ViewSubscribersPage = () => {
    const [data, changeData] = useState(
        [
            { "Subscriber": "Suresh", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZUUzPWexwYFKYLr3eR81HIW6UGWZcAKoSQ&s" },
            { "Subscriber": "Anil", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLX62ngGcKKfRDmHK2-kZ8ixUZvclXpE6XA&s" },
            { "Subscriber": "John", "imglink": "https://www.eharmony.com/wp-content/uploads/2013/06/eight-key-qualities-to-look-for-in-a-guy.jpg" },
            { "Subscriber": "Paul", "imglink": "https://media.glamour.com/photos/569679ce16d0dc3747f0707d/master/w_1600%2Cc_limit/sex-love-life-blogs-single-ish-what-type-of-guy-do-you-want.jpg" },
            { "Subscriber": "Treesa", "imglink": "data:image/jpeg;base64,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" },
            { "Subscriber": "Maya", "imglink": "https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg" },
            { "Subscriber": "Neya", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZHqWA3ajb0g2TmGMYzSoRpiR5HqjelAKfw&s" },
            { "Subscriber": "Gwen", "imglink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJ69gUrJgJ3LEmMZmWUprFxulVmT5OohLoA&s" },
            { "Subscriber": "Anoop", "imglink": "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" },
            { "Subscriber": "Vikram", "imglink": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Guy_Pearce_Cannes_2012_%28revised%29.jpg" },
           


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

export default ViewSubscribersPage