import React from 'react';
import '../style/desktop/profile.scss';

const StaticProfileSkeleton = (props) => {

  return (
    <div className="profileSkel">
        <div className="staticProfile">
            <div className="topLayer">

                <section className="bizLogo">

                </section>

                <section className="details">



                </section>

                <section className="bottom">

                </section>
            </div>

            <div className="middleLayer">

            </div>

            <div className="bio">

            </div>
        </div>
    </div>
  );
};



export default StaticProfileSkeleton;
