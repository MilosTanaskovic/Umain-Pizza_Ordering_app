import React from 'react'

interface Props {
    restaurant: any;
}

const Restaurant: React.FC<Props> = ({restaurant}: Props)  => {
    const { name, address1, address2 } = restaurant
    return (
        <div>
            <h2>{name}</h2>
            <p>{address1}</p>
            <p>{address2}</p>
        </div>
    )
}

export default Restaurant