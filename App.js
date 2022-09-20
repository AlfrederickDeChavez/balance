import AppNavigation from './src/screens/AppNavigation';
import { AuthProvider } from './src/context/AuthContext';
import { ContentProvider } from './src/context/ContentContext';

export default function App() {

  return (
    <AuthProvider> 
      <ContentProvider>
        <AppNavigation />
      </ContentProvider>
    </AuthProvider>
  )  
     
}


  

