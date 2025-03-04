import { useState } from 'react';
import './App.css';
import Content from './Layout/Content';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
function App() {
  const [wishlist, setWishlist]= useState([]);
  const addTowishlist=(item)=>{
    setWishlist([...wishlist,item]);
  };
  const removeFromwishlist=(item)=>{
    setWishlist(wishlist.filter((wishItem)=>wishItem !== item));
  };
  return (
    <div className="App">
      <Header wishCount={wishlist.length} />
      <Content addTowishlist={addTowishlist} removeFromwishlist={removeFromwishlist}/>
      <Footer />
    </div>
  );
}

export default App;
