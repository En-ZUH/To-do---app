import React from 'react';
//import Footer from './components/Footer/Footer';
//import Header from './components/Header/Header';
import ToDo from './components/todo/todo.jsx';
import ListContext from './context/settingsContext';


function App() {
  return (
    <>
      {/* <Header /> */}
      <ListContext>
        <ToDo />
      </ListContext>
      {/* <Footer /> */}
    </>
  );
}

export default App;

