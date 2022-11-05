import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Userinformation () {
    return(
        <div>

      
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Name" />
          </Form.Group>
          </Form>
     </div>
    );
}


export default Userinformation;