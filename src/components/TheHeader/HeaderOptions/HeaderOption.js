import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderOption.module.css';
import { Avatar } from '@material-ui/core';

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className={styles.HeaderOption}>
      {Icon && <Icon className={styles.Icon} />}
      {avatar && <Avatar className={styles.Icon} src={avatar} />}
      <h3 className={styles.Title}>{title}</h3>
    </div>
  );
}

HeaderOption.propTypes = {
  Icon: PropTypes.object,
  title: PropTypes.string,
};

export default HeaderOption;
