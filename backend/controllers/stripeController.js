// This is your test secret API key.
import dotenv from "dotenv";
dotenv.config();
import stripe from "stripe";
const stripeClient = stripe(process.env.STRIPE_KEY);
// console.log(process.env.STRIPE_KEY);
// console.log(process.env.PRICE_ID);

const stripeCheckout = async (req, res) => {
  const items = [
    {
      id: 1,
      quantity: 3,
      price: 10000,
      title: "Goat",
      image: [
        "https://a0.muscache.com/im/pictures/miso/Hosting-47025046/original/4d713a1e-ab4c-4d70-905f-d24b4042189f.jpeg?im_w=720",
      ],
    },
  ];
  let lineitems = [];
  items.forEach((item) => {
    lineitems.push();
  });
  const session = await stripeClient.checkout.sessions.create({
    line_items: items.map((items) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: items.title,
            images: items.image,
          },
          unit_amount: items.price,
        },
        quantity: items.quantity,
      };
    }),
    mode: "payment",
    success_url: `http://localhost:5173/profile`,
    cancel_url: `http://localhost:5173/order`,
  });

  res.json({ url: session.url });
};

export default stripeCheckout;
