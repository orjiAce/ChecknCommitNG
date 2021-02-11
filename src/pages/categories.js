import React, {Component} from 'react';
import '../style/desktop/categories.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Offline, Online} from "react-detect-offline";
import logo from '../images/CHECKnCOMMITLogo.png';
import CategoryList from "../components/CategoryList";
import Select from 'react-select';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CategoryList,
            searchValue: "",
            visible: 20,
            selectedOption: null,
            error: false
        };
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }

    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );

    };

    filterText = e => {
        this.setState({
            searchValue: e.target.value
        });
    };
 handleSubmit = (e) => {
    e.preventDefault()
};

    render() {
        const { selectedOption } = this.state;
        const filteredCategory = this.state.CategoryList.filter(category =>
            category.label.toLowerCase().includes(this.state.searchValue)
        );
        return (
            <div className="categoryPage">
                <div className="categoryBanner">
                    <div>
                        Categories
                    </div>

                    <section className="searchWrap">
                        <form method='post' onSubmit={this.handleSubmit}>
                            <div className="inputWrap">
                                <label><FontAwesomeIcon icon={faSearch}/> </label>
                                <input type="text" placeholder="Filter category" name="searchValue"
                                       onChange={this.filterText}/>




                            </div>


                        </form>
                    </section>


                </div>

                <div className="categories">
                    <span>
                        All Categories
                    </span>

                    <Online>
                        <div className="boxWrap">


                            {filteredCategory.slice(0, this.state.visible).map(category => {

                                return (
                                    <Link className="catBox" to={`/allBusiness/${category.label}`} title={category.label}>
                                        <div className="thumbImg">
                                            <img src={logo} alt={category.label}/>
                                        </div>

                                        <div className="title">
                                            {
                                                category.label
                                            }
                                        </div>
                                    </Link>)

                            })}


                        </div>

                        <div>
                            {this.state.visible < CategoryList.length &&
                            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                            }
                        </div>
                    </Online>


                    <Offline>
                        <div className="noResultInfo">You probably don't have an internet connection</div>
                    </Offline>
                </div>

            </div>
        );
    }
}

export default Categories;