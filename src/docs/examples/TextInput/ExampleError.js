import React from 'react';
import TextInput from 'ps-react-igoroctaviano/TextInput';

/** Required TextInput with error */
export default function ExampleRequired() {
  return (
    <TextInput htmlId="example-required" label="First Name" name="firstname" onChange={() => {}} error="First name is required." />
  );
}
