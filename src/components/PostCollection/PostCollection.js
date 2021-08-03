import React, { useState, useEffect } from 'react';
import styles from './PostCollection.module.css';
import InputOption from '../InputOption/InputOption';
import Post from '../Post/Post';
import { db } from '../../firebase';
import {
  Create,
  Image,
  Subscriptions,
  Event,
  CalendarViewDay,
} from '@material-ui/icons';
import firebase from 'firebase';

function PostCollection() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  });

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'John Doe',
      description: 'Test time',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className={styles.Container}>
      <div className={styles.InputContainer}>
        <div className={styles.Input}>
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button type="submit" onClick={sendPost} />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default PostCollection;
