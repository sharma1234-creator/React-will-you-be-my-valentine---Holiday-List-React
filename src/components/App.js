
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' }
    ]
  }

  render() {
    return (
      <div id="main">
        <ol>
             <li key="location1">{this.cityList[0].name}</li>
             <li key="location2">{this.cityList[3].name}</li>
             <li key="location3">{this.cityList[5].name}</li>
            // <li key="location4">{this.cityList[9].name}</li>
            // <li key="location5">{this.cityList[10].name}</li>
           //  <li key="location6">{this.cityList[12].name}</li>
            // <li key="location7">{this.cityList[12].name}</li>
             //<li key="location8">{this.cityList[13].name}</li>
             //<li key="location9">{this.cityList[14].name}</li>
             //<li key="location10">{this.cityList[18].name}</li>
             //<li key="location11">{this.cityList[19].name}</li>
             //<li key="location12">{this.cityList[23].name}</li>
             //<li key="location13">{this.cityList[24].name}</li>
             //<li key="location14">{this.cityList[25].name}</li>
             //<li key="location15">{this.cityList[26].name}</li>
              //<li key="location16">{this.cityList[27].name}</li>
          </ol>
      </div>
    )
  }
}


export default App;
