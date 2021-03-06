import React, { Component } from 'react';
import TextInputCSSModules from 'ps-react-igoroctaviano/TextInputCSSModules';

/** Required TextBox with error */
export default class ExampleError extends Component {
  render() {
    return (
      <TextInputCSSModules
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
      />
    );
  }
}
