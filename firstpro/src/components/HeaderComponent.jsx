import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className>
                        <div>  <a href="#"> hotelo management app</a></div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;