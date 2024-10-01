/*
  Fionn McCarthy
  G00414386@atu.ie
  Data Representation and Querying Lab 2
*/

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import './App.css';

function App() {
  
  return (
    <div>
      <NavigationBar />
      <Header />
      <Content />
      <Footer />
    </div>
  );

}

export default App;
