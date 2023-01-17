const express = require("express");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "5",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "4",
      nickName: "공주님",
    },
    {
      name: "크렁",
      age: "5",
      nickName: "공룡",
    },
  ];
  res.status(200).send(JSON.stringify(pororoObjArr));
});

app.listen(PORT, () => {
  console.log(`백엔드 서버가 ${PORT} 번 포트에서 작동 중`);
});
