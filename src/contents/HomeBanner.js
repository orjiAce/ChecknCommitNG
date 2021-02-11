import React, {Component, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap/gsap-core";
import {Link} from "react-router-dom";
import queryString from '../pages/search';
import PropTypes from "prop-types";

import {Offline, Online} from "react-detect-offline";
import {connect} from 'react-redux';
import {searchValue} from "../redux/actions/dataActions";
const HomeBanner = ({state, liveSearch,searchValue, history}) => {


    const [searchParam, setSearchVal] = useState(
        '',
    );
    const [hideResult, showResult] = useState(
        false,
    );

    function searchVal(event) {
        setSearchVal(event.target.value);

    }

    function handleSubmit(e ){
       e.preventDefault();
     searchValue(searchParam,history);
    };

    const filteredResult = liveSearch.filter(theSearch =>
        theSearch.SMHandle.includes(searchParam)
    );


    function displayResult(event) {
        if (event.target.value === '') {
            showResult(false)
        } else if (event.target.value !== '') {
            showResult(true)
        }


    }

    // this.state = {
    //     search: '',
    // };

    //variables for our animated dom nodes
    let svg = useRef(null);

    /*
            const handleOnChange = (event) => {

                this.setState({
                    search: event.target.value
                });
            };


        const getLocation = () =>{
                // this is the best way to get the current search value?
                let location;
                this.props.router.listen(routerState => {
                    location = routerState
                })() ; // immediately un listen
                return location
            };

           const handleSubmit = (event) =>{
                event.preventDefault();
                const { router } = this.props;
                const { pathname, search } = getLocation();
                const query = queryString.parse(search);
                if (this.state.search) {
                    query.q = this.state.search
                } else {
                    delete query.q
                }
                const string = queryString.stringify(query);
                router.push({
                    pathname,
                    search: string ? `?${string}` : ''
                })
            };
        */


    useEffect(() => {
        //open our menu

        staggerReveal(svg);
        // staggerText(line1, line2);

    }, [state]);

    const staggerReveal = (node1) => {
        gsap.from([node1], {
            x: -80,
            duration: 2,
            delay: 0.2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    };

    const staggerText = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            delay: 0.1,
            y: 100,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.5
            }

        });
    };

    return (

        <div>
            <div className="homeBanner">

                <section className="searchWrap">
                    <form>
                        <div className="inputWrap">
                            <form method='post' onSubmit={handleSubmit}>
                            <input type="search" onKeyDown={displayResult} placeholder="Business name" className='searchVal' name="Business"
                                   onChange={searchVal} required={true}/>

                            <label>| </label>
                            <input name="Location" type="text" placeholder="Location"
                                   id="Location"/>
                       {/*     <Offline>
                                <div>Search</div>
                            </Offline>*/}
{/*
                            <Online>
                                <Link to={`/search/${searchParam.toLowerCase()}`}> Search </Link> </Online>*/}

                                <button className="searchBtn" type='submit'>Search</button>
                            </form>
                        </div>

                        <div className="smallTxt">
                            <small> Search business by name and location</small>
                        </div>
                        <div className="centerInfo">

                            Remember by reviewing a business, you are helping other customers
                        </div>

                    </form>

                    {
                        hideResult ? (<section className="results">


                            {
                                liveSearch && filteredResult.map((({businessName, handle, SMHandle}) => (
                                        <div className="listResults"><Link
                                            to={`/search/${businessName}`}> {SMHandle}  </Link></div>
                                    )

                                ))
                            }

                        </section>) : ('')
                    }


                </section>


                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="623.03" height="1465.818"
                         viewBox="0 0 623.03 1165.818" ref={el => svg = el}>
                        <g transform="translate(0)">
                            <path
                                d="M411.272,198.866s58.278,38.855,85.518,107.312-.393,79.106-18.554,69.847-114.314-102.1-114.314-102.1Z"
                                transform="translate(103.795 -20.296)" fill="#f1ad40"/>
                            <path
                                d="M467.766,245.706a38.811,38.811,0,0,1-1.524-3.627s3.426-2.315,7.487,2.16a4.8,4.8,0,0,1,.294.387,38.6,38.6,0,0,1-1.509-3.6s3.421-2.315,7.482,2.16c2.268,2.5-.181,5.214,5.234,7.585a11.283,11.283,0,0,1,2.8-2.862,11.992,11.992,0,0,0,3.6-3.849v2.191a6.931,6.931,0,0,1,1.157-.925,12,12,0,0,0,3.6-3.849v5.487a10.8,10.8,0,0,1,2.666-2.692,12.05,12.05,0,0,0,3.6-3.849V261.3c-2.113.274-4.206.4-6.268.465v.589c-1.6.207-3.178.269-4.759.357v2.227a62.889,62.889,0,0,1-7.022.522c-16.043.274-23.117-20.8-23.117-20.8S464.257,242.838,467.766,245.706Zm6.913.264c.532,1.8.191,3.643,3.224,5.332A43.223,43.223,0,0,1,474.679,245.969Zm-2.2,7.513c-.791-1.028-1.514-2.062-2.149-3.069A4.7,4.7,0,0,0,472.483,253.482Z"
                                transform="translate(-394.746 152.857)" fill="#dc8766"/>
                            <path
                                d="M435.211,441.024V428.939c0-13.925,13.046-39.186,13.046-48.471s36.06,7.544,36.06,7.544.289,14.008,12.406,27a34.3,34.3,0,0,1,8.753,26.01Z"
                                transform="translate(-261.973 724.793)" fill="#11393d"/>
                            <path
                                d="M424.638,443.722l-6.247-2.9-2.914,2.9h-23.8c-2.366-6.82-10.427-32.748-3.152-50.734,8.438-20.854,34.531-15.284,34.531-15.284s17.712,24.6,27.963,29.007,49.4,20.182,54.057,30.4c1.4,3.054-.982,5.11-.295,6.614Z"
                                transform="translate(-5.226 722.096)" fill="#11393d"/>
                            <path
                                d="M633.339,239.516c13.517,195.145,50.419,450.909,90.458,719.941,0,0-7.849,12.716-52.382,6.066L534.263,394.261a3.95,3.95,0,0,0-7.626,1.245c-1.581,43.056-15.444,174.761-7.993,571.841,0,0-23.411,12.8-48.373,0,0,0-88.422-587.3-68.059-699.744Z"
                                transform="translate(-293.876 149.09)" fill="#0b5e3f"/>
                            <path
                                d="M380.428,467.168c-.32,17.4,35.657,84.015,145.424,66.711,62.344-9.828,90.654-40.147,90.654-40.147S815.521,326.509,799.095,252.4c-5.663-25.561-71.1-64.54-120.447-62.133-71.955,3.513-127.732,32.955-127.732,32.955C498.653,242.882,381.632,401.073,380.428,467.168Z"
                                transform="translate(-273.306 -56.551)" fill="#ffc14e"/>
                            <path
                                d="M463.559,207.865s-5.188,27.121-22.481,47.789c0,0-17.3,115.827-13.408,243.709l-8.887,16.028-25.2-18.611s17.728-167.926,34.99-241.555c0,0-10.551-35.068-25.545-45.588s9.44-14.354,9.44-14.354Z"
                                transform="translate(-4.791 -35.222)" fill="#5e0b37"/>
                            <path
                                d="M420.03,191.588c15.909,6.7,30.847,32.469,17.444,67.268,0,0-2.025-14.39-9.91-14.524S414.7,253.69,414.7,253.69l-22.626-18.911S391.338,179.487,420.03,191.588Z"
                                transform="translate(23.889 -57.837)" fill="#f1ad40"/>
                            <g transform="translate(413.991)">
                                <path
                                    d="M380.727,226.74c-12.277,66.664,57.88,87.714,78.868,65.925,6.733-6.981,14.214-20.533,19.949-35.74q1.969-5.177,3.612-10.515c7.394-24.088,9.306-49.443-3.358-58.417C435.729,156.723,393.008,160.081,380.727,226.74Z"
                                    transform="translate(-370.408 -145.128)" fill="#f2a07a"/>
                                <path
                                    d="M491.614,224.258s-22.2-28.718-68.9-27.3c0,0-18.782,34.825-25.52,50.931,0,0-17.79,1.648-10.448,38.84,0,0-20.761-7.037-11.435-64.788,8.086-50.057,38.757-40.1,38.757-40.1s15.682-27.2,47.913-13.847,43.872,28.981,53.943,15.2S535.022,228.459,491.614,224.258Z"
                                    transform="translate(-372.619 -164.306)" fill="#145b6b"/>
                                <path
                                    d="M381.995,186.423c-.987,3.638-.145,7.027,1.886,7.575s4.475-1.958,5.462-5.6.145-7.027-1.886-7.575S382.982,182.786,381.995,186.423Z"
                                    transform="translate(-282.97 -95.774)" fill="#1a4850"/>
                                <path
                                    d="M389.825,182.635s3.891,16,10.98,15.589-1.974,13.682-18.6,3.607C382.209,201.83,379.863,192.039,389.825,182.635Z"
                                    transform="translate(-298.447 -87.93)" fill="#dc774e"/>
                                <path
                                    d="M391.04,182.858c-1.674,2.609-.382,6.412,2.894,8.5s7.285,1.664,8.959-.94.382-6.412-2.888-8.5S392.719,180.254,391.04,182.858Z"
                                    transform="translate(-341.928 -96.431)" fill="#ec7d66"/>
                                <path
                                    d="M380.428,189.45c0,2.987,2.971,5.389,6.7,5.5q1.969-5.177,3.612-10.515a8.506,8.506,0,0,0-3.338-.651C383.508,183.818,380.392,186.366,380.428,189.45Z"
                                    transform="translate(-277.993 -83.15)" fill="#ec7d66"/>
                                <path d="M397.638,183.9s-5.343-6.113-12.2-6.206"
                                      transform="translate(-310.756 -108.535)" fill="none" stroke="#1a4850"
                                      strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.587"/>
                                <path d="M379.843,177.91s8.1.9,7.952,5.368" transform="translate(-272.023 -107.619)"
                                      fill="none" stroke="#1a4850" stroke-linecap="round" strokeMiterlimit="10"
                                      strokeWidth="0.587"/>
                                <path
                                    d="M422.062,189.62s-7.316-15.315-19.262-10.334-1.514,32.34,9.394,34.345S422.062,189.62,422.062,189.62Z"
                                    transform="translate(-397.488 -106.034)" fill="#f2a07a"/>
                                <path
                                    d="M399.2,185.206s-1.964-8.655-12.117-3.762C387.086,181.445,395.689,180.034,399.2,185.206Z"
                                    transform="translate(-320.856 -99.135)" fill="#1a4850"/>
                                <path d="M386.085,186.2s16.524,6.639,19.774,18.265"
                                      transform="translate(-322.34 -73.079)" fill="none" stroke="#1a4850"
                                      strokeMiterlimit="10" strokeWidth="0.5"/>
                            </g>
                            <path
                                d="M421.137,185.532s-2.692,12.752-29.286,32.288c0,0,15.5,36.453,49.8,43.557,0,0,14.493-23.866,29.126-31.208,0,0-29.126-5.606-41.129-42.405C429.647,187.764,423.958,188.978,421.137,185.532Z"
                                transform="translate(-3.059 -75.858)" fill="#dc8766"/>
                            <path
                                d="M426.843,188.589s-7.668,18.684,0,34.593a54.3,54.3,0,0,0,20.58,22.874s-14.168,9.688-18.058,18.084c0,0-28.537-26.481-29.834-49.086S426.843,188.589,426.843,188.589Z"
                                transform="translate(-19.166 -63.12)" fill="#f1ad40"/>
                            <path
                                d="M702.057,196.931c44.544,2.113,9.828,72.776-10,86.949s-189.746,22.569-189.746,22.569L543.3,384.91s8.36,34.5-27.958,33.947c0,0-86.939-106.026-90.83-143.765S585.32,191.4,702.057,196.931Z"
                                transform="translate(-424.447 -30.256)" fill="#f1ad40"/>
                            <path
                                d="M512.471,234.6s10.065,5.389,7.471,25.38-19.459,30.325-35.021,34.2-27.24-15.062-27.24-15.062,2.811-3.023,7.781.419c3.627,2.511-.558,7.229,14.679,6.531,0,0,1.643-7.327,4.128-9.76,5.6-5.472,4.754-23.463,4.754-23.463Z"
                                transform="translate(-392.794 128.622)" fill="#f2a07a"/>
                            <path
                                d="M365.717,199.452s5.839,111.229,0,132.279-8.98,60.706,19.18,56.376,32.2-67.232,24.016-101.014-21.686-90.618-21.686-90.618Z"
                                transform="translate(210.372 -30.255)" fill="#ffc14e"/>
                            <g transform="translate(523.814 77.288)">
                                <path
                                    d="M409.951,227.125s-2.955,18.813-21.195,5.818c0,0-6.95-.279-10-6.7-1.746-3.679-5.617-16.622-8.37-20.74-4.583-6.857-5.187-10.282-1.927-10.6,6.479-.646,13.233-1.276,16.524-2.816C390.332,189.592,407.238,203.682,409.951,227.125Z"
                                    transform="translate(-334.574 -127.016)" fill="#dc8766"/>
                                <g transform="translate(0)">
                                    <path
                                        d="M378.407,186.54l23.381,49.468s.749,5.379-3.844,7.616c-4.175,2.036-6.515-.677-9.208-6.118-4.361-8.815-18.834-38.985-18.834-38.985Z"
                                        transform="translate(-344.521 -148.946)" fill="#145b6b"/>
                                    <path
                                        d="M397.863,179.5l6.665,1.55-.651,2.785c4.19,5.694,5.616,16.028,3.018,27.106s-8.474,19.712-14.762,22.967l-.651,2.78-6.671-1.55c-8.587-2-12.633-16.074-9.027-31.436S389.27,177.506,397.863,179.5Z"
                                        transform="translate(-374.466 -179.264)" fill="#145b6b"/>
                                    <path
                                        d="M374.492,204c-3.606,15.367.439,29.441,9.032,31.436S402,226.6,405.6,211.242s-.439-29.441-9.032-31.441S378.093,188.641,374.492,204Z"
                                        transform="translate(-366.507 -178.014)" fill="#208090"/>
                                    <ellipse cx="11.177" cy="19.996" rx="11.177" ry="19.996"
                                             transform="translate(29.837 51.633) rotate(-166.753)" fill="#fff"/>
                                </g>
                                <path
                                    d="M367.432,191.419s1.514,11.9,0,19.423,1.524,9.616,2.268,9.316,3.761-5.2,3.761-5.2-3.9,6.577.388,10.634c1.116,1.059,5.653-5.73,5.653-5.73s-2.516,5.963-.7,7.936,4.624-2.532,4.624-2.532-1.121,3.917,1.1,4.216c1.25.17,7.26-2.656,8.582-4.687.486-.749,3.395-.429,3.395-.429l3.725,1.09C394.424,207.922,389,205.587,389,205.587s-1.865-4.578-4.474-3.87c0,0-3.214-7.874-8.04-6.138C376.485,195.578,370.76,184.025,367.432,191.419Z"
                                    transform="translate(-327.997 -138.914)" fill="#f2a07a"/>
                            </g>
                        </g>
                    </svg>
                </div>

                <div className="words">
                    CHECKING REVIEWS
                </div>
                <div className="words2">
                    BEFORE COMMITTING
                </div>

                <div className="circleOne">

                </div>
                <div className="circleTwo">

                </div>
            </div>
        </div>
    );
};

HomeBanner.propTypes = {
    //router: PropTypes.object.isRequired
    searchValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    data: state.data,


});



export default connect(mapStateToProps,{searchValue}) (HomeBanner);