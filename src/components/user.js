import React, {Component} from 'react'

class User extends Component {

    render() {
        return(
            <h2>Hello Wold {this.props.user}</h2>
        )
    }
}
export default User