// TODO: write your code here
import GameSaveLoader from "./GameSavingLoader";

GameSaveLoader()
  .load()
  .then(
    (saving) => {
      console.log(saving);
    },
    (error) => {
      console.error(error);
    }
  );
