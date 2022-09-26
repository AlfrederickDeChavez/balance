import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext , useState} from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    // DOMAIN 
    const host = '127.0.0.1'

    // AUTHENTICATION
    const [authtokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

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
            setAuthTokens(JSON.parse(authtoken)) 
            
        } 
        catch (e) {
            console.log('store token error' + e)
        }
    }


    // FOR USER SIGN UP
    const registerUser =  (username, email, password, password2, age, gender, height, weight) => {

        // let registrationCredentials = {
        //     'username': `${username}`,
        //     'email': `${email}`,
        //     'password': `${password}`,
        //     'password2': `${password2}`,
        //     'age': `${age}`,
        //     'gender': `${gender}`,
        //     'height': `${height}`,
        //     'weight': `${weight}`
        // }

        // let response = await fetch(`http://${host}:8000/accounts/register/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },

        //     body: JSON.stringify(registrationCredentials)
        // })

        // let data = await response.json()

        const response = { status: 200 }
        // Success or failed alert
        return response
          
    }

    // USER ALREADY HAVE AN ACCOUNT AND READY FOR AUTHENTICATION
    const loginUser = async (email, password) => {
        console.log('Logged In')
        let response = await fetch(`http://${host}:8000/accounts/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({'email': `${email}`, 'password': `${password}`})
        })

        let data = await response.json()
        
        if (response.status === 200) {
            storeToken(JSON.stringify(data))
        } else {
            alert('Something went wrong')
        }
    }

    // GETTING THE PERSONAL INFORMATION UPON COMPONENT LOAD
    const fetchUserData = async() => {
        let response = await fetch(`http://${host}:8000/accounts/fetch_user/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${authtokens.access}`,
            },
        })

        let data = await response.json()
        console.log(data)
        setUser(data)
    }

    // REMOVE TOKENS FROM ASYNC STORAGE
    const logoutUser = async () => {
        try {
            setAuthTokens(null)
            await AsyncStorage.removeItem('token')
        }

        catch (e) {
            console.log('Logged Out User Error Not Working')
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
    }

    return (
        <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    )
}