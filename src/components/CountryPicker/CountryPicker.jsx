import React, { useState, useEffect } from 'react' ;
import { NativeSelect, FormControl } from'@material-ui/core'
import styles from './CountryPicker.module.css'
import { countries } from '../../api'

const CountryPicker = ({ handleCountryChange }) =>{

    const [countryList, setCountryList] = useState([])

    useEffect(
        () => {
            const fetchcountries = async ()=>{
                setCountryList(await countries())
            }

            fetchcountries()

        }, [setCountryList]

    )

    console.log(countryList)
    return (
        <FormControl>
            <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countryList.map((country,i)=>
                    <option key={i} value={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker