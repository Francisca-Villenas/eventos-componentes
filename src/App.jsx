import { useState } from "react";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import "./index.css";


const userCredential = {
  password: "252525",
};

const App = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    setError("");

    if(!name.trim() || !password.trim() ) {
      return setError("Completa todos los campos");
    }

    if (userCredential.password === password) {
      alert("Bienvenido");
    } else {
      setError("Credenciales incorrectas");
    };

  };
 

  return (
  <>
    <Form handleChange={handleChange} name={name} setName={setName} password={password} setPassword={setPassword} error={error} setError={setError}/>
    {password === "252525" && (<Button/>)}
    <p>
    {error ? error : null}
    </p>

  </>
  );
};

export default App;
