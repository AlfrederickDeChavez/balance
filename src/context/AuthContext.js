import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext , useState} from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    // DOMAIN  
    const host = '192.168.1.2'

    // AUTHENTICATION
    const [authtokens, setAuthTokens] = useState()
    const [user, setUser] = useState(null)
    const [loggingIn, setLoggingIn] = useState(false)
    const [registered, setRegistered] = useState(false)
    const [response, setResponse] = useState({'': ''})

    // ADDING FOOD TO DATABASE - POST 
    const addFood = async (food) => {
        console.log('Adding food...')
        let response = await fetch(`http://${host}:8000/foods/consumed/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token' + String(authtokens.access),
            },
            body: JSON.stringify(food)
        })
        let data = await response.json()
    }

    // SETTING THE 'TOKEN' TO ASYNC STORAGE
    const storeToken = async (token) => {
        try {
            await AsyncStorage.setItem('token', token)
            const authtoken = await AsyncStorage.getItem('token')
            setTimeout(() => {
                setAuthTokens(JSON.parse(authtoken)) 
            }, 500)
               
        } 
        catch (e) {
            console.log('store token error' + e)
        }
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
        let response = await fetch(`http://${host}:8000/accounts/register/`, {
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

        setLoggingIn(true)
        let response = await fetch(`http://${host}:8000/accounts/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({'email': `${email}`, 'password': `${password}`})
        })

        let data = await response.json()
        
        if (response.status === 200) {
            fetchUserData(data)
            storeToken(JSON.stringify(data))
            setLoggingIn(false)
        } else {
            setLoggingIn(false)
            alert('Something went wrong')
        } 


        
    }

    // GETTING THE PERSONAL INFORMATION UPON COMPONENT LOAD
    const fetchUserData = async(token) => {
        let response = await fetch(`http://${host}:8000/accounts/fetch_user/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token.access}`,
            },
        }) 

        let data = await response.json()
        console.log(data)
        setUser(data)
    }

    // REMOVE TOKENS FROM ASYNC STORAGE
    const logoutUser = async () => {
        // try {
        //     setAuthTokens(null)
        //     await AsyncStorage.removeItem('token')
        // }

        // catch (e) {
        //     console.log('Logged Out User Error Not Working')
        // }

        const authtoken = await AsyncStorage.getItem('token')
        console.log(authtoken)
    }

    const deleteResponse = () => {
        setResponse({})
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
        deleteResponse: deleteResponse
    }



    return (
        <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    )
}