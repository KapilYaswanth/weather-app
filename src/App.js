import React, { Component } from 'react'
import './App.css'
import fetchweather from './components/fetchweather'
export class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={query:'',weather:{}};
    this.search=this.search.bind(this);
  }
  
    
    search = async (e) => {
        e.preventDefault();
        
            const data = await fetchweather(this.state.query);

            this.setState({query:'',weather:data})
        
    }
  render() {
    return(<div className="main-container">
        <form  onSubmit={this.search}>
            <input type="text" className="task-input" placeholder="Search for a place" required value={this.state.query} onChange={(e) => this.setState({query:e.target.value})}/>
            &nbsp;&nbsp;&nbsp;<button className="button-add" type="submit">Weather</button>
        </form>
            
            {this.state.weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{this.state.weather.name}</span>
                        <sup>{this.state.weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(this.state.weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} alt={this.state.weather.weather[0].description} />
                        <p>{this.state.weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div> );
  }
}

export default App
