import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext , useEffect, useState} from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    // DOMAIN  
    // const host = 'balance-intake.up.railway.app'
    const host = 'web-production-86a3e.up.railway.app'

    // AUTHENTICATION
    const [authtokens, setAuthTokens] = useState()
    const [user, setUser] = useState(null)
    const [loggingIn, setLoggingIn] = useState(false)
    const [registered, setRegistered] = useState(false)
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(true)
    const [disabled, setDisabled] = useState(false)

    // ADDING FOOD TO DATABASE - POST 
    const addFood = async (food) => {
        console.log('Adding food...')
        let response = await fetch(`https://${host}/foods/consumed/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token' + String(authtokens.access),
            }, 
            body: JSON.stringify(food) 
        })
        let data = await response.json()
    }


    // FOR USER SIGN UP
    const registerUser = async (username, email, password, password2, age, gender, height, weight) => {

        let registrationCredentials = {
            'username': `${username}`,
            'email': `${email}`,
            'password': `${password}`,
            'password2': `${password2}`,
            'age': `${age}`,
            'gender': `${gender}`,
            'height': `${height}`,
            'weight': `${weight}`
        }

        try {
        let response = await fetch(`https://${host}/accounts/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(registrationCredentials)
        })

        let data = await response.json()
        // Success or failed alert
        
        if (data.response == 'success') {
           setResponse(data)
        } else if (data.response == 'error') {
            setResponse(data)
        }

        }
        catch(e) {
            alert('Something went wrong')
        }
        
    }

    // USER ALREADY HAVE AN ACCOUNT AND READY FOR AUTHENTICATION
    const loginUser = async (email, password) => {

        setDisabled(true)
        setLoggingIn(true)
        let response = await fetch(`https://${host}/accounts/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({'email': `${email}`, 'password': `${password}`})
        })

        let data = await response.json()
        
        if (response.status === 200) {   
            setAuthTokens(data)         
            AsyncStorage.setItem('token', JSON.stringify(data))
            fetchUserData(data)
            setLoggingIn(false)
            setDisabled(false)
        } else {
            setLoggingIn(false)
            alert('Something went wrong')
            setDisabled(false)
        } 

        
    
    }

    const refreshToken = async (token) => {
        let response = await fetch(`https://${host}/accounts/login/refresh/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({'refresh': token.refresh})
        })

        let data = await response.json()

        if (response.status == 200) {
            AsyncStorage.setItem('token', JSON.stringify(data))
            setAuthTokens(data)
        } else {
            logoutUser()
        }

    }

    // GETTING THE PERSONAL INFORMATION UPON COMPONENT LOAD
    const fetchUserData = async(token) => {

        try {
            let response = await fetch(`https://${host}/accounts/fetch_user/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token.access}`,
            },
            }) 

            let data = await response.json()

            if (response.status == 200) {
                AsyncStorage.setItem('user', JSON.stringify(data))
                setUser(data)
            } else {
                return null
            } 
        } catch (e) {
            return null
        }
        

    }

    // REMOVE TOKENS FROM ASYNC STORAGE
    const logoutUser = async () => {
        try {
            setAuthTokens(null)
            await AsyncStorage.removeItem('token')
            await AsyncStorage.removeItem('user')
        }

        catch (e) {
            console.log('Something went wrong')
        }
    }

    const deleteResponse = () => {
        setResponse({})
    }

    const updateProfile = async (username, gender, age, height, weight) => {
        let response = await fetch(`https://${host}/accounts/update_profile/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authtokens.access}`,
            },

            body: JSON.stringify({
                'username': `${username}`, 
                'gender': `${gender}`,
                'age': `${age}`,
                'height': `${height}`,
                'weight': `${weight}`,
            })
        }) 

        let data = await response.json()

        if (response.status == 200) {
            setUser({...user, username: data.username, age: data.age, gender: data.gender, height: data.height, weight: data.weight})
            AsyncStorage.setItem('user', JSON.stringify({...user, username: data.username, age: data.age, gender: data.gender, height: data.height, weight: data.weight}))
            alert('Your profile has been updated successfully!')
        }
         
    }

    // DATA AND FUNCTIONS TO BE PASSED TO OTHER COMPONENTS
    const contextData = {
        addFood: addFood,
        authtokens: authtokens,
        loginUser: loginUser,
        registerUser: registerUser,
        logoutUser: logoutUser,
        fetchUserData: fetchUserData,
        user: user,
        loggingIn: loggingIn,
        registered: registered,
        response: response,
        deleteResponse: deleteResponse,
        updateProfile: updateProfile,
        loading: loading,
        disabled: disabled
    }

    useEffect(() => {  
 
        AsyncStorage.getItem('token')
            .then((token) => {
                if(token){
                    refreshToken(JSON.parse(token))
                    setLoading(true)
                }else {
                    console.log('NO TOKEN')
                }
            }).catch((err) => {
                console.log(err)
            })
            
        AsyncStorage.getItem('user')
            .then((user)=> {
                if(user) { 
                    setUser(JSON.parse(user))
                } else {
                    console.log('NO USER')
                }
            }).catch((error) => {
                console.log(error)
            })  

        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}