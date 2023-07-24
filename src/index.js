import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
//import getJsonData from './services/jsonDb'

import './index.css';
import jsonDb from './services/jsonDb';


initialiazeApp();


async function initialiazeApp(){
  const dbUrl = "http://localhost:3001/employees";
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const db = new jsonDb(dbUrl);
  try{
    await db.getData()
      .then(data => {
        root.render(
          <React.StrictMode>
            <App data={data}
                 db={db} />
          </React.StrictMode>
        );
      })
  }
  catch(error){
    console.error('Error initializing app:', error);
  }
}