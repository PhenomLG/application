import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import getJsonData from './services/db'

import './index.css';


initialiazeApp();


async function initialiazeApp(){
  const dbUrl = "http://localhost:3001/employees";
  const root = ReactDOM.createRoot(document.getElementById('root'));
  try{
    await getJsonData(dbUrl)
      .then(data => {
        root.render(
          <React.StrictMode>
            <App data={data}
                 dbUrl={dbUrl} />
          </React.StrictMode>
        );
      })
  }
  catch(error){
    console.error('Error initializing app:', error);
  }
}