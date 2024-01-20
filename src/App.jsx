import { useEffect, useState } from 'react';
import Card from './components/Card';
import axios from 'axios';
import { debounce } from 'lodash';

function App() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedFetchData = debounce(fetchData, 500);

  useEffect(() => {
    if (username) {
      debouncedFetchData();
    }
  }, [username, debouncedFetchData]);

  const styles = {
    input: {
      width: '70%',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      height: '30px',
    },
  };

  return (
    <>
      <h1>Github profile Stalker</h1>
      <input
        type="text"
        placeholder='Enter github username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <Card data={data} />
    </>
  );
}

export default App;
