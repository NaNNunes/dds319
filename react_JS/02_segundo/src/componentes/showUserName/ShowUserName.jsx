import React from 'react'

const ShowUserName = (props) => {
  console.log(props);
    return (
    <div>

        <h1>
            The user name is {props.name}
        </h1>
        <p>
            {props.name} is {props.age} old
        </p>

    </div>
  )
}

export default ShowUserName