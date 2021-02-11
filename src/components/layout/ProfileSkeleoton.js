import React from 'react';



const ProfileSkeleton = () => {
    return <div className="profileSkeleton">

        <div className="desktop">


            <div className="contSVG">
                <div className="profileParams">

                    <div className="notifications">
                        <section className="noti">
                            <section className="notiIcon">
                            </section>
                        </section>
                    </div>

                    <div className="details">
                        <div className="detailsTop">
                            <section className="detailsLeft">


                            </section>
                            <section className="userImage">

                            </section>

                            <section className="detailsRight">


                            </section>
                        </div>
                        <div className="detailsBottom">

                            <section className="userName">
                                <span> </span><br/>
                                <small> </small>

                            </section>
                            <section className="numbers">
                                <section className="reviews"> </section>
                                <section className="flagged"> </section>
                            </section>
                        </div>

                    </div>
                    <div className="writeReview">

                        <section className="words">

                        </section>
                    </div>
                </div>
            </div>
        </div>



        <div className="mobile">



            <div className="mobileBanner">



                <section className="bottom">

                    <section className="top">


                    </section>

                    <section className="userDetails">
                        <div>

                        </div>
                        <div>

                        </div>
                        <div className="name">

                        </div>

                        <div>

                        </div>

                    </section>

                    <section className="userImage">

                    </section>
                </section>

                <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="Path_4" x="0" y="0" filterUnits="userSpaceOnUse">
                            <feOffset dy="10" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="12.5" result="blur"/>
                            <feFlood floodOpacity="0.161"/>

                            <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_4)">
                        <path id="Path_4-2" data-name="Path 4" d="M0,0H480V220.824s-116.373,48.509-236.373,48.509S0,220.824,0,220.824Z" transform="translate(0 0)" fill="#dddddd"/>
                    </g>
                </svg>






            </div>


        </div>

        <div className="contentSkel">

        </div>
        </div>

};
export default ProfileSkeleton