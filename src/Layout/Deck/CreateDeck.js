import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../../utils/api";

import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../../utils/api";

function CreateDeck() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const history = useHistory();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const addData = await createDeck(formData);
    history.push(`/decks/${addData.id}`);
  };

  function handleReset() {
    history.push("/");
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a to="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label> <br></br>
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Deck Name"
            onChange={changeHandler}
            value={formData.name}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label> <br></br>
          <textarea
            name="description"
            className="form-control"
            rows="4"
            placeholder="Brief description of the deck"
            onChange={changeHandler}
            value={formData.description}
          ></textarea>
        </div>
        <Link to="/">
          <button value="Cancel" className="btn btn-secondary">
            Cancel
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-primary mx-2" onClick={handleSubmit}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default CreateDeck;

