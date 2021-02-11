import React, {Component} from 'react';
import CategoryList from "../components/CategoryList";
import '../style/desktop/compare.scss';
import {getBizCategory, compareVendors, overallRating} from '../redux/actions/dataActions';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faList, faMapMarker, faSearch, faStar} from "@fortawesome/free-solid-svg-icons";
import PropTypes, {array} from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Checkbox from "../components/CheckBox";
import Compare from "./compare";
import notFoundImage from "../images/Group 609.png";
import {toast} from "react-toastify";

const list = [];

class CompareBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CategoryList,
            businesses: {},
            category: '',
            searchValue: "",
            selected: [],
            selectedItem: new Map(),
            selectedBiz: [],
            checkedBiz: [],
            numberOfSelection: 2,
            allBusiness: [],
            newArray: [],
            showCompare: false,
            showButton: false,
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({errors: {}});
        }
    }


//for checkboxes

    filterText = e => {
        this.setState({
            searchValue: e.target.value
        });
    };

    componentDidMount() {
        const category = this.props.match.params.category;
        const allBiz = this.props.getBizCategory(category);


    };

    compare = (e) => {

    };

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;

        this.setState(prevState => ({selectedItem: prevState.selectedItem.set(item, isChecked)}));
        // this.setState(prevState => ({selected: prevState.selected.push(item, isChecked)}));

        //this.state.selected.push({bizHandle:item, value:isChecked});


        console.log(this.state.selectedItem)
        if (isChecked || this.state.selectedItem.size < 4) {
            //   this.setState(prevState => ({selectedBiz: prevState.selectedBiz.set(item, isChecked)}));

            // this.setState( prevState => ({selected: [{'bizHandle':item}]}))
            // this.setState( prevState => ({selected:  prevState.this.state.selected.push(item)}))


        } else if (!isChecked || this.state.selectedItem.size < 3) {
            // this.setState( prevState => ({selected: [this.state.selected.filter(value => value === true)]}));

            //alert('unchecked')
        }


    }

    getUnique = (arr, comp) => {

        const unique = arr
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);

        return unique;
    };


    getSelectedItems = () => {

        const {selectedItem, selectedBiz} = this.state
        //this.state.selected.set(business.index);
        //Array.from(new Set(business.index)); this.state.selected.set(business.index);

        let myCounter = 0;

        selectedItem.forEach(v => v ? myCounter++ : v);

        console.log(myCounter);
        if(myCounter > 3){
            toast.error('Maximum business to select is 3', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }
        selectedItem.forEach((value, item) => (

            value === true && selectedBiz.push({bizHandle: item})


        ));




        console.log(selectedBiz);
        this.setState({showCompare: true});
        console.log(this.props.compareVendors(this.state.selectedBiz.map(biz => (biz.bizHandle))));
    };
     checkForm =(event) =>{
        event.preventDefault()
    }

    render() {
        const {allBusiness, businessToCompare: {businessToCompare, reviews}} = this.props.data;
       const {loading} = this.props.UI;

        let filteredBusiness =
        Object.keys(allBusiness).length > 0 ? allBusiness.filter(business =>
            business.AddressOne.toLowerCase().includes(this.state.searchValue)
        ) : ('loading...');
        const {errors} = this.props.UI;


        this.state.selectedItem.forEach((value, index) => {
                if (value === true) {
                    list.unshift(
                        {'bizHandle': index}
                    )
                }

            },
        );



        return (
            <div>
                {
                    this.state.showCompare &&
                    loading === false ?
                        (<Compare reviews={reviews} businessToCompare={businessToCompare}
                                  businesses={this.getUnique(this.state.selectedBiz, "bizHandle")}/>) :

                        (
                            <div className="compareBusiness">
                                <div className="compareBanner">
                                    <div className="title">
                                        Compare Businesses
                                    </div>
                                    <div className="subTitle">
                                        Get to know what other customers are saying about the business.
                                    </div>
                                    <div className="subSubTitle">
                                        You can click and compare up to three businesses to make a decision.
                                    </div>
                                    <section className="searchWrap">
                                        <form onSubmit={this.checkForm}>
                                            <div className="inputWrap">
                                                <label><FontAwesomeIcon icon={faSearch}/> </label>
                                                <input type="text" placeholder="Filter businesses by location"
                                                       name="searchValue"
                                                       onChange={this.filterText}/>




                                            </div>
                                        </form>
                                    </section>
                                </div>

                                <div className="categories">

                    <span>
                        Businesses listed under <em>{this.props.match.params.category}</em>
                    </span>
                                    <div> <FontAwesomeIcon icon={faInfoCircle}/> <small>You cannot compare more than 3 businesses</small></div>

                                    <div className="boxWrap">


                                        {
                                            !loading ?
                                            Object.keys(allBusiness).length > 0 ?
                                                filteredBusiness.map(({bizId, country, businessName, category, logoUrl, handle}) => (

                                                    (<label className="bizBox" key={bizId}>


                                                        <Checkbox name={handle} key={bizId} id="test1"
                                                                  checked={this.state.selectedItem.get(handle)}
                                                                  onChange={this.handleChange}/>
                                                        <label htmlFor="test1"></label>

                                                        <div className="businessLogo">
                                                            <img src={logoUrl} alt="bizLogo"/>
                                                        </div>
                                                        {/*   <div className="top">
                                                                <div className="name">
                                                                    {
                                                                        businessName
                                                                    }
                                                                </div>
                                                                <div className="bio">
                                                                    {
                                                                        bio.substring(0, 180)
                                                                    }
                                                                    {bio.length > 180 && "..."}
                                                                </div>
                                                                <div className="location">
                                                                    {
                                                                        AddressOne
                                                                    }
                                                                </div>
                                                            </div>*/}


                                                        <section className="otherDetails">
                                                            <div className="bizName">
                                                                <div className="name">
                                                                    {businessName}
                                                                </div>
                                                                <small><em>listed under</em> <b>{category}</b></small>
                                                            </div>
                                                            <div className="location">
                                                                <FontAwesomeIcon icon={faMapMarker}/> {country}
                                                            </div>
                                                            <section className="ratings">

                                                            </section>


                                                        </section>

                                                    </label>)
                                                )) :
                                                (
                                                    <div className="noResultInfo">


                                                <div className="notFoundImg">
                                            <img src={notFoundImage} alt="no result image"/>

                                            </div>
                                            <p>This category does not have a review yet.</p>

                                            <ul>

                                            <li>Is this your business? Do you wish to<br/><br/>
                                            <Link to='' className="link"
                                            onClick={() => (window.location = "https://business.checkncommit.com/#/signup")}>
                                            Register Business</Link>
                                            </li>
                                            <li>Or will you like to <br/><br/>
                                            <Link to="/createReview" className="link">Leave a
                                            review</Link>
                                            </li>

                                            </ul>
                                            <div>

                                            </div>
                                            </div>

                                                ) :  ('loading...')

                                        }
                                    </div>


                                </div>

                                <div className="btnWrap">

                                    <button className="compareBusiness"
                                            onClick={this.getSelectedItems}>Compare
                                    </button>


                                </div>

                            </div>
                        )
                }

            </div>
        );
    }
}

CompareBusiness.propTypes = {
    getBizCategory: PropTypes.func.isRequired,
    compareVendors: PropTypes.func.isRequired,
    overallRating: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user,
    UI: state.UI
});


export default connect(mapStateToProps, {getBizCategory, compareVendors, overallRating})(CompareBusiness);