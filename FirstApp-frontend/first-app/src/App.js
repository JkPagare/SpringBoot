import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:8080/products');
      console.log('Response:', res); // Add this line
      setProducts(res.data);
    } catch (error) {
      console.error('Error:', error); // Add this line
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((product, index) => (
              <li key={index}>{product.prodName}{product.prodPrice}</li>
            ))}
          </ul>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
    </div>
  );
}

export default App;