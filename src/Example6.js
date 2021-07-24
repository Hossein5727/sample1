import React from 'react'

class Example6 extends React.Component {
    render(props) {
        const Numbers = [1, 2, 3, 4, 5];
        const listItem = Numbers.map((Numbers) =>
            <li>{Numbers}</li>
        );
        return (
            <ul>{listItem}</ul>
        )
    }
}

export default Example6