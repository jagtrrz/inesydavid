import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const MobileMenu = props => {
  const data = useStaticQuery(graphql`
    query MainMobileMenuQuery {
      allMainMenuJson {
        edges {
          node {
            name
            url
            weight
          }
        }
      }
    }
  `);

  const [hamburgerActive, setHamburgerActive] = useState({hamburgerActive: false})

  const closeTest = (prevState) => {
    setHamburgerActive(!prevState.hamburgerActive)
    props.close(hamburgerActive)
  }

  
  return (
    <div id="main-menu-mobile" className={`main-menu-mobile ${props.active ? 'open' : ''}`}>
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <Link to={node.url} activeClassName="active" onClick={(props) => closeTest(props)}>{node.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
