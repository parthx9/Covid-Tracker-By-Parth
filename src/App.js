import  React,{ Component } from "react";
import { render } from "@testing-library/react";
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css' ;
import { fetchData } from  './api';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import image from '/home/parth/Desktop/Web/Covid Tracker By Parth/covidtracker/src/images/image.png'
import { Footer } from "./components/Footer/Footer";



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
            <div className= 'container'>
                <div className='row m-5'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <img className={styles.image} src={image} alt="COVID-19" />  
                    </div>
                </div>
                <Cards data={this.state.data} />
                <div className= 'row m-5'>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                </div>
                <div className= 'row m-5'>
                <Chart data={this.state.data} country={this.state.country} /> 
                </div>
                <Footer />
            </div>
        )
    }
}
export default App ;
