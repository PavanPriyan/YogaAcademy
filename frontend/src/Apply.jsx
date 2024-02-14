import { Form, Button, Input, Modal,SelectPicker } from 'rsuite';
import React from 'react';
const selectAge = ['Kids-below 12', 'Teen-below 18', 'Adult-Above 18', 'Aged-Above 50'].map(item => ({
  label: item,
  value: item
}));

const selectData = ['daily-mornig', 'daily-evening', 'weekend', 'one month'].map(item => ({
label: item,
value: item
}));

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Apply = () => {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
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
  return (
    <>
      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>New User</Modal.Title>
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
              <Form.ControlLabel>Password</Form.ControlLabel>
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
      <Button onClick={handleOpen}>Apply</Button>
    </>
  );
};

export default Apply
