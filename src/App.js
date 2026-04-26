import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Information />
    </div>
  );
}
function Information() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [num, setNum] = useState("");
  const [adress, setAdress] = useState("");
  const [comment, setComment] = useState("");
  const [paiment, setPaiment] = useState("");
  const [delivery, setDelivery] = useState("");
  const [data, setData] = useState(null);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlesurnameChange(e) {
    setSurname(e.target.value);
  }
  function handlenumChange(e) {
    setNum(e.target.value);
  }
  function handleAdressChange(e) {
    setAdress(e.target.value);
  }

  function handlecommentChange(e) {
    setComment(e.target.value);
  }
  function handlepaimentChange(e) {
    setPaiment(e.target.value);
  }
  function handledeliveryChange(e) {
    setDelivery(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const InformationData = {
      name,
      surname,
      num,
      adress,
      comment,
      paiment,
    };
    // console.log(InformationData);
    setData(InformationData);
  };

  return (
    <div className="info-container">
      <form className="input-container" onSubmit={handleSubmit}>
        <label>Name:*</label> <br />
        <input type="text" value={name} onChange={handleNameChange} /> <br />
        <label>Surname:*</label> <br />
        <input type="text" value={surname} onChange={handlesurnameChange} />
        <br />
        <label>Phone Number:*</label>
        <input type="number" value={num} onChange={handlenumChange} /> <br />
        <label>Adress:*</label> <br />
        <input type="text" value={adress} onChange={handleAdressChange} />
        <textarea
          value={comment}
          onChange={handlecommentChange}
          placeholder="Enter delivery instructions"
        ></textarea>{" "}
        <br />
        <select value={paiment} onChange={handlepaimentChange} id="">
          <option value="">Select an Option</option>
          <option value="visa">Visa</option>
          <option value="masterCard">Mastercard</option>
          <option value="maestro">Maestro</option>
        </select>{" "}
        <br />
        <label>
          <input
            type="radio"
            value="Pick up"
            checked={delivery === "Pick up"}
            onChange={handledeliveryChange}
          />
          Pick up
        </label>
        <label>
          <input
            type="radio"
            value="delivery"
            checked={delivery === "delivery"}
            onChange={handledeliveryChange}
          />
          Delivery
        </label>
        <button type="submit">Submit Order</button>
      </form>
      {data && (
        <div className="Resultat">
          <h3> Order Confirmed </h3>
          <p>Name: {data.name}</p>
          <p>Surname: {data.surname}</p>
          <p>phone: {data.num}</p>
          <p>paiment: {data.paiment} 💳</p>
        </div>
      )}
    </div>
  );
}
