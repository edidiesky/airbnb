import bcrypt from "bcryptjs";

const userData = [
  {
    username: "Jeremy",
    image: "https://a0.muscache.com/im/pictures/user/45355f8f-7e35-4c96-8703-7548fe0c7754.jpg?im_w=240",
    country: "Belgium",
    email: "essienedidiong1000@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },
  {
    username: "DamiLola17b",
    image: "https://a0.muscache.com/im/pictures/user/User-524053804/original/528ed7db-f1de-49b2-b7a7-a3c6f9fb8b45.jpeg?im_w=240",
    country: "United Arab Emirates",
    email: "DamiLola17b@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },
  {
    username: "JonathanMayors12",
    image: "https://a0.muscache.com/im/pictures/user/2d8b5c11-11a1-4c18-b604-763e204949db.jpg?im_w=240",
    country: "Christmas Island",
    email: "JonathanMayors12@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },

  {
    username: "Victor Memphis",
    image: "https://a0.muscache.com/im/pictures/user/9f63574d-3b11-44c5-937b-5a2eeef401db.jpg?im_w=240",
    country: "Spain",
    email: "JonathanMayors12@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {},
  },
];
export default userData;
