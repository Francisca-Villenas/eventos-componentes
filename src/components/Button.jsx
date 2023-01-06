const Button = () => {

  const handleClick = (e) => {
    e.preventDefault();
  };

    return  <div className="btn">
             <button onClick={handleClick} type="submit">Submit
             </button>
            </div>
};

export { Button };