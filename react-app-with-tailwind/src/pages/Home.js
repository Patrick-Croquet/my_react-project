import React from 'react';
import { Link } from "react-router-dom";
import styles from './mystyle.module.css'; 

function Home() {
    return (
      <div>
        <h2 className={styles.bigblue}>This is the home page</h2>
        <Link to="about">Click to view our about page</Link>
        <br />
        <Link to="contact">Click to view our contact page</Link>
      </div>
    );
  }
  
  export default Home;