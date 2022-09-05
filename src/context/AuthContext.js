import { createContext , useState} from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    const localhost = '192.168.1.3'

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

        console.log('Signing up....')

        let response = await fetch(`http://${localhost}:8000/accounts/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(registrationCredentials)
        })

        let data = await response.json()
        console.log(data)
          
    }

    const loginUser = async (email, password) => {
        console.log('Logged In')
        let response = await fetch(`http://${localhost}:8000/accounts/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({'email': `${email}`, 'password': `${password}`})
        })

        let data = await response.json()

        

        console.log(JSON.stringify(data))
    }

    const contextData = {
        loginUser: loginUser,
        registerUser: registerUser
    }
    return (
        <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    )
}