import React from 'react';

const userInput = (props) => {

const UserInputStyle = {
    padding: '2%',
    margin: '5px auto',
    border: '1px solid blue',
    width: '96%'
}

    return (
        <div>
            <input type='text' style={UserInputStyle}
               onChange={props.changeOnInput}
               value={props.currentUserName}
            />
        </div>
    )
};

export default userInput;