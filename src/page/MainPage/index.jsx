import React, { useState, useEffect } from "react";
import Select from "react-select";

import styles from "./index.module.css";

import API from "../../api/index";

import { getBreedName } from "../../helpers/getBreedName";
import { getFormattedAllBreeds } from "../../helpers/getFormattedAllBreeds";

const MainPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [breedName, setBreedName] = useState("");
  const [allBreeds, setAllBreeds] = useState([]);

  const onRandom = async () => {
    try {
      const { data } = await API.get(`/breeds/image/random`);

      const dataImageUrl = data.message;
      const dataBreedName = getBreedName(data.message);

      setImageUrl(dataImageUrl);
      setBreedName(dataBreedName);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBreeds = async () => {
    try {
      const { data } = await API.get(`/breeds/list/all`);
      const formattedAllBreeds = getFormattedAllBreeds(data.message);
      setAllBreeds(formattedAllBreeds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBreeds();
  }, []);

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onRandom}>
        start
      </button>
      {imageUrl && <img className={styles.images} src={imageUrl} alt="dog" />}
      <p>{breedName}</p>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="breed"
        options={allBreeds}
        isSearchable
      />
    </div>
  );
};

export default MainPage;
