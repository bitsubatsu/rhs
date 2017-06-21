import React from 'react'

const Question = (props) => {
    return (
        <div>
            <h3>What is this plant?</h3>
            <img src={props.questionParts[0].imageUrl} alt="Whats this?" height="200" width="200" />
            <p>Common Name: {props.questionParts[0].commonName}</p>
            <span>Latin Name: {props.questionParts[0].latinName}</span>
        </div>
    )
}

export default Question