import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MenuLink extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="content-block">
                    <p>
                        Carbon is IBM’s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists 
                        of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
                    </p>
                    <ul className="page-navigation">
                        <li><Link>Introduction</Link></li>
                        <li><Link>Guiding principles</Link></li>
                        <li><Link>Governance</Link></li>
                        <li><Link>Certificate of Originality</Link></li>
                    </ul>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MenuLink;