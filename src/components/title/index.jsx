import React from 'react'

const Title = (props) => {
    return (
        <h2 style={{
            width: '90%',
            color: '#e4b653',
            borderBottom: '1px solid #e4b653',
            fontSize: '30px',
            margin: '25px auto',
            paddingBottom: '10px',
            textAlign: 'center'
        }}>
            {props.children}
        </h2>
    )
}

export default Title