import React, { Component } from 'react'

class Home extends Component {
    state = {
        someobject: {
            CountryCode: [{ 91: 'India' }, { 61: 'Australia' }],
            States: {
                India: ["Karnataka", "Delhi", "Maharashtra", "TamilNadu"],
                Australia: ["Queensland", "Tasmania", "Victoria"]
            }
        }
        ,
        someobject1: {
            India: ["TamiNadu", "Andra pradesh", "Bihar", "Maharashtra"],
            Australia: ["Westren Australia"]
        },
        countryCode: null,
    }
    inputHandler = (value) => {
        this.setState({ countryCode: value }, () => {
            let tmp = this.state.someobject.CountryCode.filter((val) => val === this.state.countryCode)
            // this.state.someobject.CountryCode.map((val) => {
            //     console.log(Object.entries(val[0]))
            // })
            console.log('tmp', tmp, this.state.someobject)
        })
    }

    countryCodeHandler = () => {

    }

    render() {
        return (
            <div>
                <h1>Task 1</h1>
                <label>Enter Country Code:</label>
                <input value={this.state.countryCode} onChange={(event) => this.inputHandler(event.target.value)} />
                <button type="submit">Search</button>
            </div>
        )
    }
}

export default Home;