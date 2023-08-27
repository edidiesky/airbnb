import bcrypt from "bcryptjs";

const userData = [
  {
    firstname: "Jacquie",
    lastname: "Spencer",
    phone: 512-346-8137,
    username: "Drempan58",
    image:
      "https://a0.muscache.com/im/pictures/user/45355f8f-7e35-4c96-8703-7548fe0c7754.jpg?im_w=240",
    country: "Belgium",
    email: "JacquieJSpencer@@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {
      language: ["Bulgarian", "English"],
      description:
        "Hi I am a 33 year old female doctor, with two lovely daughters Clara, age 23 and Nina, age 20, I live in Connecticut, United States. I love all the good things in life, nature, arts and culture, good food, adventure and traveling.        ",
    },
    address: {
      country: "United States",
      street: "3664 School Street",
      city: "Footville",
      state: "Wisconsin",
      zip: "6215",
      latitude: 42.76208,
      longitude: -89.210963,
    },
  },
  {
    firstname: "Amelie",
    lastname: "Thorpe",
    phone: 183-433-2741,
    username: "Blaccurity75",
    image:
      "https://a0.muscache.com/im/pictures/user/User-524053804/original/528ed7db-f1de-49b2-b7a7-a3c6f9fb8b45.jpeg?im_w=240",
    country: "United Arab Emirates",
    email: "FreddieStephens@jourrapide.com",
    createdAt: "5/17/2010",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {
      language: ["Bulgarian", "English"],
      description:
        "Mom of two girls, art & design lover, foodie. Traveling makes me happier.",
    },
    address: {
      country: "South Africa",
      street: "845 Willow St",
      city: "Port Elizabeth",
      state: "Port Elizabeth",
      zip: "6215",
      latitude: -26.002972,
      longitude: 28.149069,
    },
  },
  {
    firstname: "William",
    lastname: "Peele",
    phone: 182-347-333-1,
    username: "Disently",
    image:
      "https://a0.muscache.com/im/pictures/user/2d8b5c11-11a1-4c18-b604-763e204949db.jpg?im_w=240",
    country: "Christmas Island",
    email: "WilliamJPeele@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {
      language: ["Bulgarian", "English"],
      description:
        "Father of two girls, art & design lover, foodie. Traveling makes me happier.",
    },
    address: {
      country: "United States",
      street: "3331 Pooh Bear Lanet",
      city: "Travelers Rest",
      state: "South Carolina",
      zip: "6215",
      latitude: 35.076384,
      longitude: -82.350491,
    },
  },

  // abdul
  {
    firstname: "Abdul-Khaliq",
    lastname: "Harb",
    phone: 845-895-2836,
    username: "Shoonce50",
    image:
      "https://a0.muscache.com/im/pictures/user/9f63574d-3b11-44c5-937b-5a2eeef401db.jpg?im_w=240",
    country: "Spain",
    email: "  Abdul-KhaliqZainHarb@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "admin",
    about: {
      language: ["Bulgarian", "English"],
      description:
        "Hi I am a 23 year old Male doctor, with two lovely daughters Clara, age 23 and Nina, age 20, I live in Connecticut, United States. I love all the good things in life, nature, arts and culture, good food, adventure and traveling.        ",
    },
    address: {
      country: "United States",
      street: "3776 Bingamon Branch Road",
      city: "Wallkill",
      state: "New York",
      zip: "12589",
      latitude:41.535582,
      longitude: -74.200534,
    },
  },
  // igbo connecticut united States
  {
    firstname: "Chidinma",
    lastname: "Chibueze",
    phone:  203-202-9591,
    username: "Alludy40",
    image:
      "https://a0.muscache.com/im/pictures/user/9d5b43a4-0256-42ee-86a5-7407b661a190.jpg?im_w=240",
    country: "Christmas Island",
    email: "ChidinmaChibueze@gmail.com",
    createdAt: "1/17/2020",
    password: bcrypt.hashSync("12345", 10),
    role: "user",
    about: {
      language: ["Bulgarian", "English"],
      description:
        "Hi I am a 33 year old female doctor, with two lovely daughters Clara, age 23 and Nina, age 20, I live in Connecticut, United States. I love all the good things in life, nature, arts and culture, good food, adventure and traveling.        ",
    },
    address: {
      country: "United States",
      street: "3664 School Street",
      city: "Norwalk",
      state: "Connecticut",
      zip: "6215",
      latitude: 41.110653,
      longitude: -73.383438,
    },
  },
];
export default userData;
