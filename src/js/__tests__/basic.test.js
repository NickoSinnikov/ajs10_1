import GameSaveLoader from "../app";
test("show load data", () => {
  const equalData = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });

  GameSaveLoader.load().then((saving) => {
    expect(saving).toEqual(equalData);
  });
});
