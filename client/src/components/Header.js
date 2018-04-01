import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    // creating a helper method to check for auth and display properly wether logged in/ logging in/ logged out
    renderContent(){
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
                

            default:
                return <li>Logout</li>;
        }
    }

    render() {
        console.log(this.props);   
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>    
                </div>    
            </nav>
        );
    }
};

function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);