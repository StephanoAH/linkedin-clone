import React from 'react';
import styles from './Post.module.css';
import { Avatar } from '@material-ui/core';
import InputOption from '../InputOption/InputOption';
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <Avatar />
        <div className={styles.Info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.Body}>
        <p>{message}</p>
      </div>
      <div className={styles.Buttons}>
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="#CBCBCD" />
        <InputOption Icon={ChatOutlined} title="Comment" color="#CBCBCD" />
        <InputOption Icon={ShareOutlined} title="Share" color="#CBCBCD" />
        <InputOption Icon={SendOutlined} title="Send" color="#CBCBCD" />
      </div>
    </div>
  );
}

export default Post;
