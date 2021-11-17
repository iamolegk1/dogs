import React, { useState } from "react";

import API from "../../api/index";
import styles from "./index.module.css";

const MainPage = () => {
  const [message, setMessage] = useState("");

  const onRandom = async () => {
    try {
      const { data } = await API.get(`/breeds/image/random`);
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onRandom}>
        start
      </button>
      {message && <img className={styles.images} src={message} alt="dog" />}
      <p></p>
    </div>
  );
};

export default MainPage;
