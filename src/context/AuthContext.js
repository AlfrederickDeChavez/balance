import { createContext , useState} from "react";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)

    const localhost = '192.168.1.3'

    const loginUser = async (username, password) => {
        console.log('Logged In')
        let response = await fetch(`http://${localhost}:8000/accounts/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({'username': `${username}`, 'password': `${password}`})
        })

        let data = await response.json()

        console.log(JSON.stringify(data))
    }

    const contextData = {
        loginUser: loginUser
    }
    return (
        <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
    )
}