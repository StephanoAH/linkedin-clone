import React from 'react';
import styles from './Feed.module.css';
import InputOption from './InputOption/InputOption';
import {
  Create,
  Image,
  Subscriptions,
  Event,
  CalendarViewDay,
} from '@material-ui/icons';

function Feed() {
  return (
    <div className={styles.Container}>
      <div className={styles.InputContainer}>
        <div className={styles.Input}>
          <Create />
          <form>
            <input type="text" />
            <button />
          </form>
        </div>
        <div className={styles.InputOptions}>
          <InputOption Icon={Image} title="Images" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={Event} title="Event" color="#CBCBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
