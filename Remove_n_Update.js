import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favLinks: [],
    };
    /* TODO - Create state object for storing favLinks */
  }

  removeCharacter = (index) => {
    if (index > -1) {
      this.state.favLinks.splice(index, 1);
      this.setState({
        favLinks: [...this.state.favLinks],
      });
    }
  };

  handleSubmit = (favLink) => {
    favLink.map((link) =>
      this.setState({
        favLinks: [...this.state.favLinks, link],
      })
    );
  };

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>

        <Table
          linkData={this.state.favLinks}
          removeLink={this.removeCharacter}
        />
        <br />

        <h3>Add New</h3>

        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LinkContainer;
