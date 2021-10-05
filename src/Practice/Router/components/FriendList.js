import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <h2>Im {props.friend.name} From {props.friend.city} </h2>
        </div>
    )
}

const FriendList = () => {
    let friends = [
        {
            name: 'Komeil',
            city: 'Berlin',
            id: 986342
        },
        {
            name: 'Ali',
            city: 'Mashhad',
            id: 915272
        },
        {
            name: 'Hojjat',
            city: 'Tehran',
            id: 925345
        }
    ]

    const list = friends.map( human => <Friend key={human.id} friend={human} />)

    return (
        <div>
            {list}
        </div>
    )
}

export default FriendList;