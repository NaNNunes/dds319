import React from 'react'

import styles from "./OCss.module.css";/*Importando o style como uma variavel  */

function MyCss() {
  return (
    <div>
        <h3 className={styles.meuTitulo}>Texto do componente MyCss</h3> 
        {/* passando styles e seu metodo nos parametros */}   
    </div>
  )
}

export default MyCss