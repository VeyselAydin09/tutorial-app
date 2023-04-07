import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ getTutorials, editItem }) => {
  const { id, title: newTitle, description: newDescription } = editItem;

  const [title, setTitle] = useState(newTitle);
  const [description, setDescription] = useState(newDescription);

  //? https://reactjs.org/docs/hooks-reference.html#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.

  //? componentDidUpdate
  //? newTitle veya description her degistiginde local title ve
  //? description state'lerimizi gunceliyoruz.
  useEffect(() => {
    setTitle(newTitle);
    setDescription(newDescription);
  }, [newTitle, newDescription]);
