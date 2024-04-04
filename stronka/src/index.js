// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "./styles.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import ReactDOM from "react-dom/client";

// const Product = ({ imgUrl, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const App = () => (
//   <div>
//     <h1>Best selling products</h1>
//     <Product
//       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price={10.99}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}
//     />
//   </div>
// );

// // ReactDOM.render(product, document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// function Avatar() {
//   return (
//     <img
//       className="Avatar"
//       src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
//       alt="user avatar"
//       width={100}
//       height={100}
//     />
//   );
// }

// export default function Profile() {
//   return <Avatar />;
// }
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
