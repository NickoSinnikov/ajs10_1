// TODO: write your code here
import GameSaving from "./gamesaving";
import json from "./parser";
import read from "./reader";

export default class GameSaveLoader {
  static load(data) {
    return read()
      .then((data) => json(data))

      .then((data) => new GameSaving(JSON.parse(data)))

      .catch((error) => {
        throw new Error("Ошибка");
      });
  }
}
