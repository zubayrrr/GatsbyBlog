import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default class MailChimpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message:
        "Subscribe to my mailing list to get fresh content delivered straight to your email. ✨",
    };
  }
  _handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: "Thank you for subscribing! 🥳" });
    addToMailchimp(this.state.email)
      .then((data) => {
        console.log(data);
      })
      .catch(() => {});

    this.setState({ email: "" });
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <h2 className="">Newsletter</h2>
          <div
            className="contact row justify-content-center text-center"
            id="Newsletter"
          >
            <div className="col-lg-6">
              <form onSubmit={this._handleSubmit}>
                <div class="form-group">
                  <label
                    for="newsletter"
                    className="lead"
                    style={{ fontSize: "28px" }}
                  >
                    {this.state.message}
                  </label>
                  <input
                    type="email"
                    required
                    className="shadow-sm rounded"
                    id="newsletter"
                    value={this.state.email}
                    onChange={this.handleChange}
                    aria-describedby="emailHelp"
                    placeholder="Your Email Address"
                    style={{ height: "50px" }}
                  />
                  <p id="emailHelp" className="pt-3 lead text-muted">
                    I'll never share your email with anyone else, No spam. 🙅‍♂️
                  </p>
                </div>
                <button type="submit" className="shadow-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
