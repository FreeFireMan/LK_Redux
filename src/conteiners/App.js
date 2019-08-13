import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header/Header'
import { BrowserRouter, Route,Link,Switch} from "react-router-dom";

import {connect} from "react-redux"
import User from "../components/user";
import Year from "../components/Year";
import setYearAction from "../action/actionYear"
import Catalog from "../components/Catalog/Catalog";
import Product from "../components/Product/Product";

class App extends React.Component {

    render() {

        return (
           {/* <div>
                <User user={this.props.user}/>
                <Year year={this.props.year} setYear={this.props.setYearFunction}/>
            </div>*/},
        <div id="wrapper" className="container">

            <Header/>
            <Switch>
                <Route exact path="/:number" component={Product}/>

                <Route path="/" render={(props) => (
                    <Catalog {...props} data={this.state} aletAppPost = {this.aletAppPost}/>
                )}/>
                {/* <Catalog tree_data={tree_data} prod_data={prod_data} isLoadingTree={isLoadingTree} isLoadingProd={isLoadingProd}/>*/}
            </Switch>
            <div id="footer">
                <div className="footer-top row">
                    <div className="menu-footer col-sm-6 col-md-3">
                        <div className="well">3<br/>.menu-footer</div>
                    </div>
                    <div className="menu-footer col-sm-6 col-md-3">
                        <div className="well">3<br/>.menu-footer</div>
                    </div>
                    <div className="menu-footer col-sm-6 col-md-3">
                        <div className="well">3<br/>.menu-footer</div>
                    </div>
                    <div className="menu-footer col-sm-6 col-md-3">
                        <div className="well">3<br/>.menu-footer</div>
                    </div>
                </div>
                <div className="footer-bottom row">
                    <div className="copyrights col-sm-6 col-md-6">
                        <div className="well">6<br/>.copyrights</div>
                    </div>
                    <div className="copyrights col-sm-6 col-md-6">
                        <div className="well">6<br/>.copyrights</div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

function mapStateProps(state) {
    return {
        user: state.userInfo.user,
        year: state.userInfo.year,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setYearFunction: year => {
            dispatch(setYearAction(year))
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(App);
