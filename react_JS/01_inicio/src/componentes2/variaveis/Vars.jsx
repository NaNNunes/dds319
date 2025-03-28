import { useState } from 'react'; // import de hook;

const Vars = () => {
    // default var js
    let thing = 10;
    console.log(thing);

    // hook useState var
    const initial_val = 10;
    const [number, setNumber] = useState(initial_val);
    console.log(number); 

    return (
    <div>
        <p>The variavel: {thing}</p>
        <button 
            onClick={() => {
                thing += 10;
                console.log(thing);
            }}
            >Alterar</button>

        <p>Number Var value: {number}</p>
        <button onClick={() => {
            setNumber(number + 10)
        }}>+</button>

        <button onClick={() => {
            setNumber(10)
        }}>Resetar</button>

        <button onClick={() => {
            setNumber(number - 10)
        }}>-</button>

        
    </div>
  )
}

export default Vars