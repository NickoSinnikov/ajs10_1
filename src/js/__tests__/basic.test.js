import GameSaveLoader from "../GameSavingLoader";
test("show load data", () => {
  const equalData = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };

  GameSaveLoader.load().then((saving) => {
    expect(saving).toEqual(equalData);
  });
});
