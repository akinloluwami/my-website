import React from "react";
import "./App.css";
export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mrgowjnz"
        method="POST"
        className="contact"
      >
        <input type="text" name="name" placeholder=" Sender Name" />
        <input type="email" name="email" placeholder="Sender Email" />
        <textarea
          name="Message"
          id=""
          cols="30"
          rows="10"
          className="textarea"
          placeholder="Type a message..."
        ></textarea>
        {status === "SUCCESS" ? (
          <p>Thanks! I will get back to you soon.</p>
        ) : (
          <button>Submit</button>
        )}
        {status === "ERROR" && (
          <p>Ooops! Something went wrong, please try again</p>
        )}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
