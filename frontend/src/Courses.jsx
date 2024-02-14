// import React from 'react';
// import Nav from './Nav';
// import { Link } from 'react-router-dom';
// import  { useState } from 'react';


// import { Form, Button, Input, Modal,SelectPicker } from 'rsuite';

// const selectData = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice'].map(item => ({
//   label: item,
//   value: item
// }));

// const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);


//   const [open, setOpen] = React.useState(false);
//   const [formValue, setFormValue] = React.useState({
//     name: '',
//     email: '',
//     password: '',
//     textarea: ''
//   });

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleOpen = () => {
//     setOpen(true);
//   };


// const Courses = () => {
//   // Sample data for each card
//   const cardsData = [
//     {
//       id: 1,
//       imageUrl: 'https://t3.ftcdn.net/jpg/01/75/97/78/240_F_175977887_zpWaS3D5MZVbqgPqjfaeRlRVFSXrDcS3.jpg',
//       title: 'Yoga Center',
//       description: 'Location:Coimbatore',
//       buttonText: 'Apply',
//     },
//     {
//       id: 2,
//       imageUrl: 'https://t3.ftcdn.net/jpg/01/21/10/90/240_F_121109011_3boGaVW9KTA9ZZ7COJrTrnK2xuJIhida.jpg',
//       title: 'Dev Yoga Academy',
//       description: 'Location:Trichy',
//       buttonText: 'Apply',
//     },
//     {
//       id: 3,
//       imageUrl: 'https://t3.ftcdn.net/jpg/01/16/05/42/240_F_116054208_VA1hASAGTo4VYZBbEjQ6qvOheRnaKDng.jpg',
//       title: 'Yoga Traning School',
//       description: 'Location:Chennai',
//       buttonText: 'Apply',
//     },
//     {
//         id: 4,
//         imageUrl: 'https://t3.ftcdn.net/jpg/02/07/87/44/240_F_207874460_OL65CDm92FLPCrZosSYLkzugERu7ASkP.jpg',
//         title: 'Uri Yoga School',
//         description: 'Location:Madurai',
//         buttonText: 'Apply',
//       },
//   ];

//   return (
//     <div>
//     <Nav/>
//     <br></br>
//     <div style={{textAlign:'center'}}>
//    <h1>
// WE DELIVER QUALITY YOGA EDUCATION FROM A HEARTFELT PLACE</h1>
// <p >Our goal is to change the way yogis are educated. We aim to lead by example and deliver quality yoga education from a heartfelt place. We believe in spending time in nature in order to feel enriched from the soul outward. We share everything we know with our students and offer the best tools we have to enrich their lives. We help our students discover their passions, live authentically and become the happiest they have ever been. For us, yoga is not just an exercise, a philosophy or a fashion choice. It is our lifestyle</p>
// <br></br>
// <h2> Select a yoga academy and apply for it..</h2>
// </div>
//     <div style={cardListContainerStyle} className="card-list-container">
//       {cardsData.map((card) => (
//         <div
//           key={card.id}
//           style={{ ...cardContainerStyle, ...cardContainerHoverStyle }}
//           className="card-container"
//         >
//           <img src={card.imageUrl} alt={card.title} style={cardImageStyle} />
//           <div style={cardContentStyle} className="card-content">
//             <h2 style={cardTitleStyle} className="card-title">{card.title}</h2>
//             <p style={cardDescriptionStyle} className="card-description">{card.description}</p>
//             <button style={cardButtonStyle} className="card-button">{card.buttonText}</button>
//             <Modal open={open} onClose={handleClose} size="xs">
//         <Modal.Header>
//           <Modal.Title>New User</Modal.Title>
//         </Modal.Header>
        // <Modal.Body>
        //   <Form fluid onChange={setFormValue} formValue={formValue}>
        //     <Form.Group controlId="name-9">
        //       <Form.ControlLabel>Username</Form.ControlLabel>
        //       <Form.Control name="name" />
        //       <Form.HelpText>Required</Form.HelpText>
        //     </Form.Group>
        //     <Form.Group controlId="email-9">
        //       <Form.ControlLabel>Email</Form.ControlLabel>
        //       <Form.Control name="email" type="email" />
        //       <Form.HelpText>Required</Form.HelpText>
        //     </Form.Group>
        //     <Form.Group controlId="password-9">
        //       <Form.ControlLabel>Password</Form.ControlLabel>
        //       <Form.Control name="password" type="password" autoComplete="off" />
        //     </Form.Group>
        //     <Form.Group controlId="textarea-9">
        //       <Form.ControlLabel>Textarea</Form.ControlLabel>
        //       <Form.Control rows={5} name="textarea" accepter={Textarea} />
        //     </Form.Group>
        //     <Form.Group controlId="select-10">
        //       <Form.ControlLabel>SelectPicker</Form.ControlLabel>
        //       <Form.Control name="select" data={selectData} accepter={SelectPicker} />
        //     </Form.Group>
        //   </Form>
        // </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose} appearance="primary">
//             Confirm
//           </Button>
//           <Button onClick={handleClose} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <Button onClick={handleOpen}>New User</Button>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// // Inline styles with different class names
// const cardListContainerStyle = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   margin: '20px',
// };

// const cardContainerStyle = {
//   width: '300px',
//   border: '1px solid #ddd',
//   borderRadius: '8px',
//   overflow: 'hidden',
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   transition: 'box-shadow 0.3s ease',
// };

// const cardContainerHoverStyle = {
//   ':hover': {
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   },
// };

// const cardImageStyle = {
//   height: '150px',
//   width: '100%',
//   objectFit: 'cover',
// };

// const cardContentStyle = {
//   padding: '20px',
// };

// const cardTitleStyle = {
//   fontSize: '1.5em',
//   marginBottom: '10px',
// };

// const cardDescriptionStyle = {
//   color: '#666',
// };

// const cardButtonStyle = {
//   backgroundColor: '#3498db',
//   color: '#fff',
//   padding: '10px 15px',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
// };

// const cardButtonHoverStyle = {
//   ':hover': {
//     backgroundColor: '#2980b9',
//   },
// };

// export default Courses;



import React, { useState } from 'react';
import Nav from './Nav';
import { Form, Button, Input, Modal, SelectPicker } from 'rsuite';
import { Link } from 'react-router-dom';

const selectAge = ['Kids-below 12', 'Teen-below 18', 'Adult-Above 18', 'Aged-Above 50'].map(item => ({
    label: item,
    value: item
  }));

const selectData = ['daily-mornig', 'daily-evening', 'weekend', 'one month'].map(item => ({
  label: item,
  value: item
}));

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });

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

  return (
    <div>
      <Nav />
      <br />
      <div style={{ textAlign: 'center' }}>
        <h1>WE DELIVER QUALITY YOGA EDUCATION FROM A HEARTFELT PLACE</h1>
        <p>Our goal is to change the way yogis are educated. We aim to lead by example and deliver quality yoga education from a heartfelt place. We believe in spending time in nature in order to feel enriched from the soul outward. We share everything we know with our students and offer the best tools we have to enrich their lives. We help our students discover their passions, live authentically and become the happiest they have ever been. For us, yoga is not just an exercise, a philosophy or a fashion choice. It is our lifestyle...</p>
        <br />
        <h2>Select a yoga academy and apply for it..</h2>
      </div>
      <div style={cardListContainerStyle} className="card-list-container">
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
              <Link to={'/Cou'}>
              <button style={cardButtonStyle} className="card-button" onClick={handleOpen} >{card.buttonText}</button></Link>
            </div>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-9">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-9">
              <Form.ControlLabel>Create Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="number-10">
              <Form.ControlLabel>Mobile</Form.ControlLabel>
              <Form.Control name="Mobile" type="number" autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Age</Form.ControlLabel>
              <Form.Control name="select" data={selectAge} accepter={SelectPicker} />
            </Form.Group>
           
            <Form.Group controlId="select-10">
              <Form.ControlLabel>Select Timing</Form.ControlLabel>
              <Form.Control name="select" data={selectData} accepter={SelectPicker} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default Courses

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

