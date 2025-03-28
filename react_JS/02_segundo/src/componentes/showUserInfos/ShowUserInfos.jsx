import React from 'react'

const ShowUserInfos = ({name, uf, age, eGente}) => {
  return (
    <div>
        <h2>
            Nome: {name}
        </h2>
        <h2>
            UF: {uf}
        </h2>
        <h2>
            Idade: {age}
        </h2>
        {eGente && <h3>Humano</h3> || <h3>Não humano</h3>}
        <hr />
    </div>
  )
}

export default ShowUserInfos