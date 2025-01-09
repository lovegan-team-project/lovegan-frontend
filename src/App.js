import { RouterProvider} from 'react-router-dom';
import './App.css';
import router from './routes/router';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    if(localStorage.getItem("token")){
      const isAuthenticate = async () => {
        const response = await fetch("http://localhost:8000/auth/jwt", {
          method : "POST",
          headers : {
            'Authorization' : `Bearer ${localStorage.getItem("token")}`
          }
        })

        if(!response.ok) return;

        const getAuthenticate = await response.json();
        return getAuthenticate;
      }

      isAuthenticate()
      .then((res) => {
        console.log(res)
      })
    }
  }, [])
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider> 
    </>

  );
}

export default App;
