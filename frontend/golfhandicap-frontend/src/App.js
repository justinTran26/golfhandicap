import React, { useEffect, useState } from 'react';
import { fetchGolfScores } from './api/golfScores';

function App() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGolfScores()
      .then(response => {
        setScores(response.data);
      })
      .catch(error => {
        console.error('Error fetching scores:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Golf Scores</h1>
      <ul>
        {scores.map(score => (
          <li key={score.id}>
            Date: {score.date} — Score: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
