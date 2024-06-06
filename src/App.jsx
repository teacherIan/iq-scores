import { useState, useEffect } from 'react';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from './db';
import './App.css';

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
        setData(newData);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2> <p>{item.total}</p>{' '}
        </div>
      ))}
    </div>
  );
}

export default App;
