const React = require('react');

function Show (props) {
    const {veggie} = props;
    return(
        <div>
            <h1>What Veggie Have We Here?</h1>
            <p> It's a {veggie.name}! It is {veggie.color}.</p>
            <p> Hmm...should I eat it? ...{veggie.readyToEat}!</p>
        </div>
    )
}

module.exports = Show;