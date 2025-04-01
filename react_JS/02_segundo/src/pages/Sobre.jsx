import React from 'react'

import {Link} from "react-router-dom"

const Sobre = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h1>Sobre</h1>
      <Link to={"/info/1"} >InfoCard 1</Link> 
      <Link to={"/info/2"} >InfoCard 2</Link> 
      <Link to={"/info/3"} >InfoCard 3</Link> 
    </div>
  );
};

export default Sobre;