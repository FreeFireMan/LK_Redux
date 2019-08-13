import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header/Header'
import { BrowserRouter, Route,Link,Switch} from "react-router-dom";

import {connect} from "react-redux"
import {fetchData} from "../action/data"
import Catalog from "../components/Catalog/Catalog";
import Product from "../components/Product/Product";

class App extends React.Component {

    componentDidMount() {
        this.props.fetchDataUrl("http://localhost:8080/api/catalog/")
    }

    render() {

        return (

        <div id="wrapper" className="container">

            <Header/>
            <Switch>
                <Route exact path="/:number" component={Product}/>
                <Route path="/" render={(props) => (
                    <Catalog {...props} data={this.state} aletAppPost = {this.aletAppPost}/>
                )}/>
            </Switch>
            <div>
                {console.log(this.props.data)}
            </div>
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

const mapStateToProps = state => {
    return {
        data : state.fetchData.data
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchDataUrl: url => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
