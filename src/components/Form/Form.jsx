import React, { Component } from "react";
import s from "./Form.module.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    inputName: "",
    number: "",
  };

  handleInputChange = (e) => {
    this.setState({ inputName: e.currentTarget.value });
  };

  handleInputChangeNumber = (e) => {
    this.setState({ number: e.currentTarget.value });
  };

  handleAdd = () => {
    console.log("my hanlerAdd", this);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.inputName,
      number: this.state.number,
    };

    this.props.onSubmit(contact);

    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      id: "",
      inputName: "",
      number: "",
    });
  };

  render() {
    const { inputName, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor={this.id}>Name</label>
        </div>
        <div>
          <input
            type="name"
            name="inputValue"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.id}
            value={inputName}
            onChange={this.handleInputChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor={this.id}>Number</label>
        </div>
        <div>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.id}
            value={number}
            onChange={this.handleInputChangeNumber}
          />
        </div>
        <br></br>
        <div>
          <label>
            <button className={s.button} type="submit" onClick={this.handleAdd}>
              add Contact {}
            </button>
          </label>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  inputName: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
