const React = require('react');

function New () {
    return (
        <div>
            <h1>Input a New Veggie!</h1>
            <form action='/vegetables' method='POST'>
                <p>
                    Name: <input type='text' name='name'/>
                </p>
                <p>
                    Color: <input type='text' name='color'/>
                </p>
                <p>
                    Ready to Eat? 
                        <input type='radio' name='readyToEat' value='yes'/>
                        Yes 
                        <input type='radio' name='readyToEat' value='no'/>
                        No
                        <input type='radio' name='readyToEat' value='idk'/>   
                        idk         
                </p>
                <input type='submit' value='add'/>
            </form>
        </div>
    )
}

module.exports = New;