import React, {Component} from 'react';
import CategoryList from "../components/CategoryList";
import '../style/desktop/compare.scss';
import logo from '../images/CHECKnCOMMITLogo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faList, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Offline, Online} from "react-detect-offline";


class CompareCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CategoryList,
            businesses: {},
            searchValue: "",
            visible: 20,
            error: false
        };
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }
    filterText = e => {
        this.setState({
            searchValue: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
    };

    render() {
        const filteredCategory = this.state.CategoryList.filter(category =>
            category.label.toLowerCase().includes(this.state.searchValue)
        );
        return (
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
                        <form method='post' onSubmit={this.handleSubmit}>
                            <div className="inputWrap">
                                <label>
                                    <label><FontAwesomeIcon icon={faSearch}/> </label>
                                </label>
                                <input type="text" placeholder="Filter category" name="searchValue"
                                       onChange={this.filterText}/>




                            </div>
                        </form>
                    </section>
                </div>

                <div className="centerTxt">
                    <FontAwesomeIcon className="gold" icon={faInfoCircle}/> You can only compare same category.
                </div>
                <div className="centerTxt">
                    <FontAwesomeIcon className="gold" icon={faInfoCircle}/> Pick a category from the boxes below.
                </div>
                <div className="categories">
                    <span>
                        All Categories
                    </span>
                    <Online>
                    <div className="boxWrap">

                        {
                            filteredCategory.slice(0, this.state.visible).map(category => (
                                <Link className="catBox" title={category.label} to={`/compareBusiness/${category.label}`}>
                                      <div className="thumbImg">
                                    <img src={logo} alt={category.label}/>
                                    </div>

                                    <div className="title">
                                        {
                                            category.label
                                        }
                                    </div>
                                </Link>
                            ))
                        }



                    </div>
                    </Online>
                    <Offline>
                        <div className="noResultInfo">You probably don't have an internet connection</div>
                    </Offline>
                    <div>
                        {this.state.visible < CategoryList.length &&
                        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CompareCategory;