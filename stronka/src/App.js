// import logo from './logo.svg';
// import './App.css';

// import { set } from "mongoose";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"s
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import Avatar from "./Avatar.js";

// function Card({ children }) {
//   return <div className="card">{children}</div>;
// }
// // function Avatar({ person, size = 100 }) {
// //   return (
// //     <img
// //       className="avatar"
// //       src="https://i.imgur.com/1bX5QH6.jpg"
// //       alt="Lin Lanying"
// //       width={100}
// //       height={100}
// //     />
// //   );
// // }

// // export default function Profile(person, size, isSepia, thickBorder) {
// //   return (
// //     <Card>
// //       <Avatar
// //         size={size}
// //         person={person}
// //         isSepia={isSepia}
// //         thickBorder={thickBorder}
// //       />
// //     </Card>
// //   );
// // }
// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//     </Card>
//   );
// }

// import { getImageUrl } from "./utils.js";

// function Profile({
//   imageId,
//   name,
//   profession,
//   awards,
//   discovery,
//   imageSize = 70,
// }) {
//   return (
//     <section className="profile">
//       <h2>{name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(imageId)}
//         alt={name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li>
//           <b>Profession:</b> {profession}
//         </li>
//         <li>
//           <b>Awards: {awards.length} </b>({awards.join(", ")})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           "Nobel Prize in Physics",
//           "Nobel Prize in Chemistry",
//           "Davy Medal",
//           "Matteucci Medal",
//         ]}
//       />
//       <Profile
//         imageId="YfeOqp2"
//         name="Katsuko Saruhashi"
//         profession="geochemist"
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
//       />
//     </div>
//   );
// }
// import { getImageUrl } from "./utils.js";

// function Avatar({ person, size }) {
//   let thumbnailSize = "s";
//   if (size > 90) {
//     thumbnailSize = "b";
//   }
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar
//         size={40}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//       <Avatar
//         size={70}
//         person={{
//           name: "Gregorio Y. Zara",
//           imageId: "7vQD0fP",
//         }}
//       />
//       <Avatar
//         size={120}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//     </>
//   );
// }

// import { getImageUrl } from "./utils.js";

// function Card({ children }) {
//   return (
//     <div className="card">
//       <div className="card-content">{children}</div>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card>
//         <h1>Photo</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={100}
//           height={100}
//         />
//       </Card>
//       <Card title="About">
//         <p>
//           Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
//           natural treatment to schistosomiasis.
//         </p>
//       </Card>
//     </div>
//   );
// }

// function Item({ name, isPacked }) {
//   return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }
// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = <del>{name + " ✔"}</del>;
//   }

//   return <li className="item">{itemContent}</li>;
// }

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {isPacked ? <del>{name + " ✔"}</del> : name + "❌"}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }
// function Drink({ name }) {
//   let part, caffeine, age;
//   if (name === "tea") {
//     part = "leaf";
//     caffeine = "15–70 mg/cup";
//     age = "4,000+ years";
//   } else if (name === "coffee") {
//     part = "bean";
//     caffeine = "80–185 mg/cup";
//     age = "1,000+ years";
//   }
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{name === "tea" ? "leaf" : "bean"}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd>
//         <dt>Age</dt>
//         <dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }

// import { people } from "./data.js";
// import { getImageUrl } from "./utils.js";

// export default function List() {
//   const listItems = people.map((person) => (
//     <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// import { recipes } from "./data.js";

// function Recipe({ id, name, ingredients }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map((ingredient) => (
//           <li key={ingredient}>{ingredient}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <Recipe {...recipe} key={recipe.id} />
//       ))}
//     </div>
//   );
// }

// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ],
// };

// export default function Poem() {
//   let output = [];

//   poem.lines.forEach((line, index) => {
//     output.push(<hr key={index + " - "} />);
//     output.push(<p key={index + " - "}>{line}</p>);
//   });
//   output.shift();

//   return <article>{output}</article>;
// }
// import { Alert } from "./Alert";
// const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// }; // END: abpxx6d04wxr

// export default App;

// import { useState, useEffect } from "react";
// import Clock from "./Clock.js";

// function useTime() {
//   const [time, setTime] = useState(() => new Date());
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// }

// export default function App() {
//   const time = useTime();
//   return <Clock time={time} />;
// }

// import Profile from "./Profile.js";

// export default function App() {
//   return (
//     <>
//       <Profile
//         person={{
//           imageId: "lrWQx8l",
//           name: "Subrahmanyan Chandrasekhar",
//         }}
//       />
//       <Profile
//         person={{
//           imageId: "MK3eW3A",
//           name: "Creola Katherine Johnson",
//         }}
//       />
//     </>
//   );
// }
// export default function Button() {
//   function handleClick() {
//     alert("Button clicked");
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>click me i'm an alert</button>,
//       <button>I don't do anything</button>
//     </div>
//   );
// }
// function AlertButton({ message, children }) {
//   return <button onClick={() => alert(message)}>{children}</button>;
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing!">Play Movie</AlertButton>
//       <AlertButton message="Uploading!">Upload Image</AlertButton>
//     </div>
//   );
// }
// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
// }

// function UploadButton() {
//   return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }
// function Button({ onSmash, children }) {
//   return <button onClick={onSmash}>{children}</button>;
// }

// export default function App() {
//   return (
//     <div>
//       <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
//       <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
//     </div>
//   );
// }
// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert("Playing!")}
//       onUploadImage={() => alert("Uploading!")}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div style={{ backgroundColor: "blue", padding: 10 }}>
//       <Button onClick={onPlayMovie}>Play Movie</Button>
//       <Button onClick={onUploadImage}>Upload Image</Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }
// export default function Toolbar() {
//   return (
//     <div
//       className="Toolbar"
//       onClick={() => {
//         alert("You clicked on the toolbar!");
//       }}
//     >
//       <button onClick={() => alert("Playing!")}>Play Movie</button>
//       <button onClick={() => alert("Uploading!")}>Upload Image</button>
//     </div>
//   );
// }
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === "black") {
//       bodyStyle.backgroundColor = "white";
//     } else {
//       bodyStyle.backgroundColor = "black";
//     }
//   }

//   return <button onClick={handleClick}>Toggle the lights</button>;
// }

// export default function ColorSwitch({ onChangeColor }) {
//   return (
//     <button
//       onClick={(e) => {
//         e.stopPropagation();
//         onChangeColor();
//       }}
//     >
//       Change color
//     </button>
//   );
// }
// import { useState } from "react";
// import { sculptureList } from "./data.js";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handlePrevClick} disabled={!hasPrev}>
//         Previous
//       </button>
//       <button onClick={handleNextClick} disabled={!hasNext}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? "Hide" : "Show"} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img src={sculpture.url} alt={sculpture.alt} />
//     </>
//   );
// }
// import { useState } from "react";
// export default function Form() {
//   // let firstName = "";
//   // let lastName = "";

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   function handleFirstNameChange(event) {
//     // firstName = event.target.value;
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     // lastName = event.target.value;
//     setLastName(event.target.value);
//   }

//   function handleResetClick() {
//     // firstName = "";
//     // lastName = "";
//     setFirstName("");
//     setLastName("");
//   }

//   return (
//     <form onSubmit={(event) => event.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>
//         Hi, {firstName} {lastName}
//       </h1>
//       <button onClick={handleResetClick}>Reset</button>
//     </form>
//   );
// }

// import { useState } from "react";

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState("");

//   if (isSent) {
//     return (
//       <h1>
//         Thank you
//         <br />
//         Message sent!
//       </h1>
//     );
//   } else {
//     return (
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert(`Sending: '${message}'`);
//           setIsSent(true);
//         }}
//       >
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <br />
//         <button>Send</button>
//       </form>
//     );
//   }
// }
// import { useState } from "react";

// export default function FeedbackForm() {
//   function handleClick() {
//     const name = prompt("What is your name?");
//     alert(`Hello, ${name}!`);
//   }
//   // const [name, setName] = useState("");

//   // function handleClick() {
//   //   setName(prompt("What is your name?"));
//   //   alert(`Hello, ${name}!`);
//   // }

//   return <button onClick={handleClick}>Greet</button>;
// }
// import { useState } from "react"; // Importujemy hook useState z biblioteki react

// export default function Form() {
//   // Eksportujemy domyślnie komponent Form
//   const [isSent, setIsSent] = useState(false); // Tworzymy stan isSent, który mówi nam, czy wiadomość została wysłana
//   const [message, setMessage] = useState("Hi!"); // Tworzymy stan message, który przechowuje aktualną wiadomość

//   if (isSent) {
//     // Jeśli wiadomość została wysłana
//     return <h1>Your message is on its way!</h1>; // Wyświetlamy informację o wysłaniu wiadomości
//   }

//   // Jeśli wiadomość nie została jeszcze wysłana, wyświetlamy formularz
//   return (
//     <form
//       onSubmit={(e) => {
//         // Po wysłaniu formularza
//         e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki (odświeżenie strony)
//         setIsSent(true); // Ustawiamy stan isSent na true, informując, że wiadomość została wysłana
//         sendMessage(message); // Wywołujemy funkcję sendMessage z aktualną wiadomością
//       }}
//     >
//       <textarea // Pole tekstowe do wpisania wiadomości
//         placeholder="Message" // Tekst wyświetlany, gdy pole jest puste
//         value={message} // Aktualna wartość pola tekstowego to stan message
//         onChange={(e) => setMessage(e.target.value)} // Po zmianie wartości pola tekstowego, aktualizujemy stan message
//       />
//       <button type="submit">Send</button> // Przycisk do wysłania formularza
//     </form>
//   );
// }

// function sendMessage(message) {
//   // Funkcja do wysyłania wiadomości
//   // ...
// }
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);
          alert("You clicked me!");
        }}
      >
        increment
      </button>
      <button onClick={() => setNumber(number - 1)}>decrement</button>
    </>
  );
}
