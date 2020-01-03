import React, { Fragment } from 'react';

const Header = (props) => {
    return(
      <Fragment>
          <header className="top"> 
            <h1> 
                { props.titulo }
            </h1>
          </header>
      </Fragment>
    )
  }

export default Header;
