// TODO: write your code here
import json from "./parser";
import read from "./reader";

export default class GameSaveLoader {
  static load(data) {
    return new Promise((resolve) => {
      const jsonRead = read();
      jsonRead
        .then((response) => {
          const jsonPars = json(response);
          return jsonPars;
        })
        .then((jsonPars) => {
          resolve(jsonPars);
        })
        .catch((error) => {
          new Error("Ошибка");
        });
    });
  }
}
