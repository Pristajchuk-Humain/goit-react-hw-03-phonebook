import React, { Component } from 'react';
import s from './Header.module.css'; 
import PropTypes from 'prop-types';

class Header  extends Component {
    render(){
        const { title } = this.props;
        return (
          <h1 className={s.title}>{title}</h1>
        );
    };

};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;