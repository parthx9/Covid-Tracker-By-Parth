import React from 'react' ;
import { Card, Grid, Typography, CardContent } from '@material-ui/core';
import './Cards.css'
import CountUp from 'react-countup' ;
import cx from 'classnames';
import '/home/parth/Desktop/Web/Covid Tracker By Parth/covidtracker/node_modules/bootstrap/dist/css/bootstrap.min.css'


const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate }} ) =>{

    if (!confirmed){
        return 'Loading..'
    }

    return (
        <div className='row'>
        <div className='col-12 col-md-4'>
            <div className="card text-center" >
                <div className="card-body infected">
                    <h5 className="card-title">Infected</h5>
                    <p className="card-text">
                        <CountUp
                            className = 'font-weight-bold blue'
                            start = {0}
                            end = {confirmed.value}
                            separator = ','
                            duration = {2.5}
                        /></p>
                    <p className='card-text'>{new Date(lastUpdate).toDateString()}</p>
                </div>
            </div>
        </div>
        <div className='col-12 col-md-4 '>
            <div className="card text-center " >
                <div className="card-body recovered">
                    <h5 className="card-title">Recovered</h5>
                    <p className="card-text">
                        <CountUp
                            className = 'font-weight-bold green'
                            start = {0}
                            end = {recovered.value}
                            separator = ','
                            duration = {2.5}
                        /></p>
                    <p className='card-text'>{new Date(lastUpdate).toDateString()}</p>
                </div>
            </div>
        </div>
        <div className='col-12 col-md-4'>
            <div className="card text-center" >
                <div className="card-body deaths">
                    <h5 className="card-title">Deaths</h5>
                    <p className="card-text">
                        <CountUp
                            className = 'font-weight-bold red'
                            start = {0}
                            end = {deaths.value}
                            separator = ','
                            duration = {2.5}
                        /></p>
                    <p className='card-text'>{new Date(lastUpdate).toDateString()}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Cards