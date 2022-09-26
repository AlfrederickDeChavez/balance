import { createContext , useContext, useState} from "react";
import AuthContext from "./AuthContext";

const ContentContext = createContext()

export default ContentContext;

export const ContentProvider = ({children}) => {

    const host = '192.168.1.10'

    const {authtokens} = useContext(AuthContext)

    const addFood = async (food, token) => {
        console.log('Adding food...')
        let response = await fetch(`http://${host}:8000/foods/consumed/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token.access}`,
            },

            body: JSON.stringify(food)
        }) 

        let data = await response.json()
        console.log(data)
    }

    const getFoods = async (token) => {
        console.log('Adding food...')
        let response = await fetch(`http://${host}:8000/foods/consumed/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token.access}`,
            },
        })

        let data = await response.json()
        console.log(data)
    }

    const contextData = {
        addFood: addFood,
        getFoods: getFoods
    } 

    return (
        <ContentContext.Provider value={contextData}>{children}</ContentContext.Provider>
    )
    } 