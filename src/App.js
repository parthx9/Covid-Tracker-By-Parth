import  React,{ Component } from "react";
import { render } from "@testing-library/react";
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css' ;
import { fetchData } from  './api';


class App extends Component {

    state = {
        data : '',
        country : '',
    }

    async componentDidMount (){
        const fetchedData = await fetchData()
        
        this.setState({
            data : fetchedData
        })
    }

    handleCountryChange =  async(country)=>{
        console.log(country)
        const fetchedData = await fetchData(country)
        this.setState({
            data : fetchedData,
            country : country
        })
    }
    render (){
        return (
            <div className= {styles.container}>
                <h1>Covid Tracker</h1>
                <Cards data = {this.state.data} />
                <CountryPicker handleCountryChange ={this.handleCountryChange} />
                <Chart data = {this.state.data} country = {this.state.country} />
            </div>
        )
    }
}
export default App ;
