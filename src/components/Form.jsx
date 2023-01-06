const Form = ({handleChange, name, setName, password, setPassword}) => {

    return (
    <form onChange={handleChange}>
    <legend>Desafío estado de los componentes y eventos</legend>
    <div className="inputName"> 
      <label>Nombre: </label>
      <input 
        onChange={(e) => setName(e.target.value)} 
        type="text" 
        placeholder="Ingresa un texto" 
        name="name"
        value={name}
      />
    </div>
    <div className="inputPassword">
      <label>Contraseña: </label>
      <input 
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        placeholder="Ingresa una contrasena" 
        name="password"
        value={password}
      />
    </div>  
    </form>
    );
};

export { Form }; 