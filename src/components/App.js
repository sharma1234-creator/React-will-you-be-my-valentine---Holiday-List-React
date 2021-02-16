
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
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ]
  }

  render() {
    return (
      <div id="main">
        <ol>
             <li key="location1">{this.cityList.name[0]}</li>
             <li key="location2">{this.cityList.name[3]}</li>
             <li key="location3">{this.cityList.name[5]}</li>
             <li key="location4">{this.cityList.name[9]}</li>
             <li key="location5">{this.cityList.name[10]}</li>
             <li key="location6">{this.cityList.name[11]}</li>
             <li key="location7">{this.cityList.name[12]}</li>
             <li key="location8">{this.cityList.name[13]}</li>
             <li key="location9">{this.cityList.name[14]}</li>
             <li key="location10">{this.cityList.name[18]}</li>
             <li key="location11">{this.cityList.name[19]}</li>
             <li key="location12">{this.cityList.name[23]}</li>
             <li key="location13">{this.cityList.name[24]}</li>
             <li key="location14">{this.cityList.name[25]}</li>
             <li key="location15">{this.cityList.name[26]}</li>
              <li key="location16">{this.cityList.name[27]}</li>
             
      </ol>
      </div>
    )
  }
}


export default App;
