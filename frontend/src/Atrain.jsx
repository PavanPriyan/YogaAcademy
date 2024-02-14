import React, { useState } from 'react';
import Nav from './Nav';
import { Form, Button, Input, Modal, SelectPicker } from 'rsuite';
import Ahome from './Ahome';

const selectAge = ['Kids-below 12', 'Teen-below 18', 'Adult-Above 18', 'Aged-Above 50'].map(item => ({
    label: item,
    value: item
  }));

const selectData = ['daily-mornig', 'daily-evening', 'weekend', 'one month'].map(item => ({
  label: item,
  value: item
}));

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Atrain = ({ imageUrl, title, description, buttonText }) => {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });
  const [isHovered, setIsHovered] = useState(false);

  const cardContainerStyle = {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    marginBottom: '20px',
  };

  const cardImageStyle = {
    height: '150px',
    width: '100%',
    objectFit: 'cover',
  };

  const cardContentStyle = {
    padding: '20px',
  };

  const cardTitleStyle = {
    fontSize: '1.5em',
    marginBottom: '10px',
  };

  const cardDescriptionStyle = {
    color: '#666',
  };

  const cardButtonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://t3.ftcdn.net/jpg/01/75/97/78/240_F_175977887_zpWaS3D5MZVbqgPqjfaeRlRVFSXrDcS3.jpg',
      title: 'Yoga Center',
      description: 'Location: Coimbatore',
      buttonText: 'Apply',
    },
    {
      id: 2,
      imageUrl: 'https://t3.ftcdn.net/jpg/01/21/10/90/240_F_121109011_3boGaVW9KTA9ZZ7COJrTrnK2xuJIhida.jpg',
      title: 'Dev Yoga Academy',
      description: 'Location: Trichy',
      buttonText: 'Apply',
    },
    {
      id: 3,
      imageUrl: 'https://t3.ftcdn.net/jpg/01/16/05/42/240_F_116054208_VA1hASAGTo4VYZBbEjQ6qvOheRnaKDng.jpg',
      title: 'Yoga Training School',
      description: 'Location: Chennai',
      buttonText: 'Apply',
    },
    {
      id: 4,
      imageUrl: 'https://t3.ftcdn.net/jpg/02/07/87/44/240_F_207874460_OL65CDm92FLPCrZosSYLkzugERu7ASkP.jpg',
      title: 'Uri Yoga School',
      description: 'Location: Madurai',
      buttonText: 'Apply',
    },
  ];
  const cardsDatas =[
    {
        id: 3,
        imageUrl: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png',
        title: 'New Center',
        description: 'Location: Add Loacation',
        buttonText: 'Apply',
      },
  ];

  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div >
    <div >
        <div>
      <Ahome />
      </div>
      </div>
      <br />
     
      <div  style={{display:'flex',flexDirection:'row',marginLeft:'20%'}} className="card-list-container">
        {cardsData.map((card) => (
          <div
            key={card.id}
            style={{ ...cardContainerStyle, ...cardContainerHoverStyle }}
            className="card-container"
          >
            <img src={card.imageUrl} alt={card.title} style={cardImageStyle} />
            <div style={cardContentStyle} className="card-content">
              <h2 style={cardTitleStyle} className="card-title">{card.title}</h2>
              <p style={cardDescriptionStyle} className="card-description">{card.description}</p>
              <button style={cardButtonStyle} className="card-button" onClick={handleOpen} >{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <div  style={{display:'flex',flexDirection:'column',marginLeft:'20%'}} className="card-list-container">
        {cardsDatas.map((card) => (
          <div
            key={card.id}
            style={{ ...cardContainerStyle, ...cardContainerHoverStyle }}
            className="card-container"
          >
            <img src={card.imageUrl} alt={card.title} style={cardImageStyle} />
            <div style={cardContentStyle} className="card-content">
              <h2 style={cardTitleStyle} className="card-title">{card.title}</h2>
              <p style={cardDescriptionStyle} className="card-description">{card.description}</p>
              <button style={cardButtonStyle} className="card-button" onClick={handleOpen} >{card.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};


export default Atrain

// Inline styles with different class names
const cardListContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
};

const cardContainerStyle = {
  width: '300px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
};

const cardContainerHoverStyle = {
  ':hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

const cardImageStyle = {
  height: '150px',
  width: '100%',
  objectFit: 'cover',
};

const cardContentStyle = {
  padding: '20px',
};

const cardTitleStyle = {
  fontSize: '1.5em',
  marginBottom: '10px',
};

const cardDescriptionStyle = {
  color: '#666',
};

const cardButtonStyle = {
  backgroundColor: '#3498db',
}

