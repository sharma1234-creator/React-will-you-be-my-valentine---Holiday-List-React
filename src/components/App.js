
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
             <li>{this.cityList.name[0]}, {this.cityList.country[0]}</li>
             <li>{this.cityList.name[3]}, {this.cityList.country[3]}</li>
             <li>{this.cityList.name[5]}, {this.cityList.country[5]}</li>
             <li>{this.cityList.name[9]}, {this.cityList.country[9]}</li>
             <li>{this.cityList.name[10]}, {this.cityList.country[10]}</li>
             <li>{this.cityList.name[11]}, {this.cityList.country[11]}</li>
             <li>{this.cityList.name[12]}, {this.cityList.country[12]}</li>
             <li>{this.cityList.name[13]}, {this.cityList.country[13]}</li>
             <li>{this.cityList.name[14]}, {this.cityList.country[14]}</li>
             <li>{this.cityList.name[18]}, {this.cityList.country[18]}</li>
             <li>{this.cityList.name[19]}, {this.cityList.country[19]}</li>
             <li>{this.cityList.name[23]}, {this.cityList.country[23]}</li>
             <li>{this.cityList.name[24]}, {this.cityList.country[24]}</li>
             <li>{this.cityList.name[25]}, {this.cityList.country[25]}</li>
             <li>{this.cityList.name[26]}, {this.cityList.country[26]}</li>
              <li>{this.cityList.name[27]}, {this.cityList.country[27]}</li>
             
      </ol>
      </div>
    )
  }
}


export default App;
