import * as React from "react";
import "./styles.css";

export default function App() {
  const [fieldVal, setFieldVal] = React.useState({
    firstName: "",
    lastName: ""
  });

  const handleField = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFieldVal({ ...fieldVal, [name]: value });
  };
  return (
    <div className="App">
      FirstName:->{" "}
      <input type="text" name="firstName" onChange={(e) => handleField(e)} />
      LastName:->{" "}
      <input type="text" name="lastName" onChange={(e) => handleField(e)} />
      <p>{JSON.stringify(fieldVal)}</p>
    </div>
  );
}
