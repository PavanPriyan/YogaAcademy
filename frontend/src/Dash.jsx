import React, { useEffect, useState } from 'react';
import './Dash.css'; // Import your CSS file
import Ahome from './Ahome';

const Dashboard = () => {
  const [yogaData, setYogaData] = useState([]);

  useEffect(() => {
    // Simulating data fetching for demonstration purposes
    const sampleData = [
      {
        id: 1,
        title: 'Hatha Yoga',
        description: 'A gentle introduction to basic yoga poses.',
        image: 'https://example.com/hatha-yoga.jpg',
      },
      {
        id: 2,
        title: 'Vinyasa Flow',
        description: 'A dynamic practice that connects breath with movement.',
        image: 'https://example.com/vinyasa-flow.jpg',
      },
      {
        id: 3,
        title: 'Ashtanga Yoga',
        description: 'A vigorous and fast-paced style with a specific sequence of poses.',
        image: 'https://example.com/ashtanga-yoga.jpg',
      },
    ];

    setYogaData(sampleData);
  }, []);

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <Ahome/>
    <div className="dashboard-container">
      <h1>Yoga Dashboard</h1>
      <div className="dashboard-content">
        {yogaData.map((item) => (
          <div key={item.id} className="yoga-card">
            <img src={item.image} alt={item.title} className="yoga-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
