import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");



    const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
    addTutorial(newTutor);
    setTitle("");
    setDescription("");
  };


    //! POST - CRUD (Create)
  const addTutorial = async (newTutor) => {
    const url = "http://127.0.0.1:8000/tutorials/";
    try {
      await axios.post(url, newTutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

