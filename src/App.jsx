import { useState, useEffect } from 'react';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './db';
import './App.css';
import logo from './assets/logo.jpg';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('effect');
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testCollection'));
        const newData = [];
        querySnapshot.forEach((doc) => {
          newData.push({ id: doc.id, ...doc.data() });
          console.log(doc.id, ' => ', doc.data());
        });
        newData.sort((a, b) => b.total - a.total);
        setData(newData.slice(0, 3));
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.length > 0 && (
        <>
          <div className="gold">
            <img className="logo" src={logo}></img>
            <div className="name">FIRST</div>
            <div className="name">{data[0].name}</div>
            <div className="total">{data[0].total}</div>
          </div>
          <div className="silver">
            <img className="logo" src={logo}></img>
            <div className="name">SECOND</div>
            <div className="name">{data[1].name}</div>
            <div className="total">{data[1].total}</div>
          </div>
          <div className="bronze">
            <img className="logo" src={logo}></img>
            <div className="name">THIRD</div>
            <div className="name">{data[2].name}</div>
            <div className="total">{data[2].total}</div>
          </div>
        </>
      )}
      {data.length === 0 && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}

export default App;
