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
        task1: null,
        task2: null,
        task3: null,
        task4: null,
        task5: null,
        task6: null,
    }
    inputHandler = (value) => {
        this.setState({ countryCode: value })
    }

    countryCodeHandler = () => {
        // let tmp = this.state.someobject.CountryCode.filter((val) => Object.entries(val) === this.state.countryCode);
        let stateName = null;
        console.log('countryCodeHandler')
        this.state.someobject.CountryCode.forEach((val) => {
            let tmp = Object.entries(val);
            if (parseInt(tmp[0]) === parseInt(this.state.countryCode)) {
                stateName = tmp[0][1]
                console.log(tmp[1], tmp[0][1])
            }
        })

        if (stateName) {
            for (const [key, value] of Object.entries(this.state.someobject.States)) {
                if (`${key}` === stateName)
                    this.setState({ task1: `${key}: ${value}` })
                // console.log(`${key}: ${value}`);
            }
        }
        // Task2
        let task2 = '';
        for (const [key, value] of Object.entries(this.state.someobject.States)) {
            task2 += `${key}: ${value[0]}` + ' '
        }
        this.setState({ task2: task2 });
        // Task3
        let task3 = '';
        for (const [key, value] of Object.entries(this.state.someobject.States)) {
            task3 += `${key}: ${value[value.length - 1]}` + ' '
        }
        this.setState({ task3: task3 });
        // Task5

        function objCombine(obj, variable) {
            for (let key of Object.keys(obj)) {
                if (!variable[key]) variable[key] = {};

                for (let innerKey of Object.keys(obj[key]))
                    variable[key][innerKey] = obj[key][innerKey];
            }
        }

        let combined = {};
        objCombine(this.state.someobject.States, combined);
        objCombine(this.state.someobject1, combined);
        console.log('Task5 output', combined)

        var x = this.state.someobject.States;
        var y = this.state.someobject1;
        var z = Object.assign({}, x, y);
        console.log(z);
    }

    render() {
        return (
            <div>
                <h1>Task 1</h1>
                <label>Enter Country Code:</label>
                <input value={this.state.countryCode} onChange={(event) => this.inputHandler(event.target.value)} />
                <button type="submit" onClick={() => this.countryCodeHandler()}>Search</button>
                <div>
                    <span>{this.state.task1 ? 'Task1 output: ' + this.state.task1 : null}</span>
                </div>
                <div>
                    <span>{this.state.task2 ? 'Task2 output: ' + this.state.task2 : null}</span>
                </div>
                <div>
                    <span>{this.state.task3 ? 'Task3 output: ' + this.state.task3 : null}</span>
                </div>
                <div>
                    <span>{this.state.task5 ? 'Task5 output: ' + this.state.task5 : null}</span>
                </div>
            </div>
        )
    }
}

export default Home;