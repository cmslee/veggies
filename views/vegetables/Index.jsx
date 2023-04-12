const React = require('react');

function Index(props) {
    const {veggies} = props;
    return (
        <div>
            <h1>All the Veggies</h1>

            <a href='/vegetables/new'><h3>Add New Veggie</h3></a>

            <ul>
                {veggies.map((veggie) => {
                    return (
                        <li key={veggie._id}>
                            <a href={`/vegetables/${veggie._id}`}>{veggie.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

module.exports = Index;