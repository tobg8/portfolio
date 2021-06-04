import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Page = ({ childrens }) => (
  <div className="page">
    {childrens}
  </div>
);

Page.propTypes = {
  childrens: PropTypes.node.isRequired,
};

export default Page;
