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
        data3: [
            {
                "country": "India",
                "population": 5000,
                "populationbygender": [
                    {
                        "male": 3000
                    },
                    {
                        "female": 2000
                    }
                ],
                "populationbyage": [
                    {
                        "18": 1000
                    },
                    {
                        "30": 1000
                    },
                    {
                        "50": 3000
                    }
                ],
                "TotalVechilescount": 8000,
                "Vechilecountbysector": [
                    {
                        "Public": 5000
                    },
                    {
                        "Private": 2500
                    },
                    {
                        "others": 500
                    }
                ]
            },
            {
                "country": "China",
                "population": 8000,
                "populationbygender": [
                    {
                        "male": 6000
                    },
                    {
                        "female": 2000
                    }
                ],
                "populationbyage": [
                    {
                        "18": 2000
                    },
                    {
                        "30": 2000
                    },
                    {
                        "50": 4000
                    }
                ],
                "TotalVechilescount": 4000,
                "Vechilecountbysector": [
                    {
                        "Public": 1000
                    },
                    {
                        "Private": 2000
                    },
                    {
                        "others": 1000
                    }
                ]
            },
            {
                "country": "UAE",
                "population": 7000,
                "populationbygender": [
                    {
                        "male": 3000
                    },
                    {
                        "female": 4000
                    }
                ],
                "populationbyage": [
                    {
                        "18": 1000
                    },
                    {
                        "30": 3000
                    },
                    {
                        "50": 3000
                    }
                ],
                "TotalVechilescount": 10000,
                "Vechilecountbysector": [
                    {
                        "Public": 5000
                    },
                    {
                        "Private": 2500
                    },
                    {
                        "others": 2500
                    }
                ]
            },
            {
                "country": "UK",
                "population": 12000,
                "populationbygender": [
                    {
                        "male": 7500
                    },
                    {
                        "female": 4500
                    }
                ],
                "populationbyage": [
                    {
                        "18": 6000
                    },
                    {
                        "30": 2000
                    },
                    {
                        "50": 4000
                    }
                ],
                "TotalVechilescount": 2000,
                "Vechilecountbysector": [
                    {
                        "Public": 500
                    },
                    {
                        "Private": 1000
                    },
                    {
                        "others": 1000
                    }
                ]
            }
        ],

        dataTask1: null,
        dataTask2: null,
        dataTask3: null,
        dataTask4: null,
        dataTask5: null,
        dataTask6: null,


    }

    componentDidMount() {

        // Task2
        let task2 = '';
        for (const [key, value] of Object.entries(this.state.someobject.States)) {
            // eslint-disable-next-line
            task2 += `${key}: ${value[0]}` + ' '
        }
        this.setState({ task2: task2 });

        // Task3
        let task3 = '';
        for (const [key, value] of Object.entries(this.state.someobject.States)) {
            // eslint-disable-next-line
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
        this.setState({ task5: JSON.stringify(combined) })


        // Data set2

        // 1.Retrive the country with highest and lowest population
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        let maxValue = '';
        let minValue = '';
        this.state.data3.forEach((val) => {
            console.log('val', val.population)
            if (val.population > max) {
                max = val.population;
                // eslint-disable-next-line
                maxValue = 'Country: ' + val.country + ',' + 'Population: ' + val.population;
            }
            if (val.population < min) {
                min = val.population;
                // eslint-disable-next-line
                minValue = 'Country: ' + val.country + ',' + 'Population: ' + val.population;
            }
        });
        // eslint-disable-next-line
        this.setState({ dataTask1: 'MAX: ' + maxValue + ', ' + 'MIN: ' + minValue })

        // 2.Retrive the country with highest male and lowest male population
        min = Number.MAX_SAFE_INTEGER;
        max = Number.MIN_SAFE_INTEGER;
        maxValue = '';
        minValue = '';
        this.state.data3.forEach((val) => {

            if (val.populationbygender[0].male > max) {
                max = val.populationbygender[0].male;
                // eslint-disable-next-line
                maxValue = 'Country: ' + val.country + ',' + 'Population: ' + val.populationbygender[0].male;
            }
            if (val.populationbygender[0].male < min) {
                min = val.populationbygender[0].male;
                // eslint-disable-next-line
                minValue = 'Country: ' + val.country + ',' + 'Population: ' + val.populationbygender[0].male;
            }
        });
        // eslint-disable-next-line
        this.setState({ dataTask2: 'MAX: ' + maxValue + ', ' + 'MIN: ' + minValue })

        // 3.Calculate the ratio of male and female in each country and display the ratio along with country name
        let obj = [];
        this.state.data3.forEach((val) => {
            let ra = val.populationbygender[0].male / val.populationbygender[1].female
            obj.push('Country: ' + val.country + ',' + 'Ratio:' + ra)
        });
        this.setState({ dataTask3: obj });

        //4. Calculate the ratio of vehicles per person 
        obj = [];
        this.state.data3.forEach((val) => {
            let ra = val.TotalVechilescount / val.population
            obj.push('Vehicle Ratio:' + ra)
        });
        this.setState({ dataTask4: obj })

        //5. Calculate the percentage of share by each type of vehicles(public,private,others)
        // console.log('data3', this.state.data3, obj)
        //6. Calculate the percentage of public vehicles wrt to total vehicles for country china

    }

    inputHandler = (value) => {
        this.setState({ countryCode: value })
    }

    countryCodeHandler = () => {
        let stateName = null;
        this.setState({ task1: null });
        this.state.someobject.CountryCode.forEach((val) => {
            let tmp = Object.entries(val);
            if (parseInt(tmp[0]) === parseInt(this.state.countryCode)) {
                stateName = tmp[0][1]
            }
        })

        if (stateName) {
            for (const [key, value] of Object.entries(this.state.someobject.States)) {
                if (`${key}` === stateName)
                    this.setState({ task1: `${key}: ${value}` })
            }
        }

    }

    render() {
        return (
            <div>
                <h1>Task 1</h1>
                <label>Enter Country Code:</label>
                <input value={this.state.countryCode} onChange={(event) => this.inputHandler(event.target.value)} />
                <button type="submit" onClick={() => this.countryCodeHandler()}>Search</button>
                <div>
                    <span>{this.state.task1 ? 'Task1 output: ' + this.state.task1 : 'No code found'}</span>
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
                <h1>Task 2</h1>
                <div>
                    <span>{this.state.dataTask1 ? '1: ' + this.state.dataTask1 : null}</span>
                </div>
                <div>
                    <span>{this.state.dataTask2 ? '2: ' + this.state.dataTask2 : null}</span>
                </div>
                <div>
                    <span>{this.state.dataTask3 ? '3: ' + this.state.dataTask3 : null}</span>
                </div>
                <div>
                    <span>{this.state.dataTask4 ? '4: ' + this.state.dataTask4 : null}</span>
                </div>
            </div >
        )
    }
}

export default Home;