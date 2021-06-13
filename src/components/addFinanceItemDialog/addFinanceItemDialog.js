import React, { useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { addFinanceItem } from '../../services/financeItem'
import PropTypes from 'prop-types'

const AddFinanceItemDialog = (props) => {

  const [item, setItem] = useState()
  useEffect(() => {
    if (props.show) {
      setItem({type: 'Asset'})
    }
  }, [props.show])

  const submit = e => {
    e.preventDefault()

    addFinanceItem(item)
    .then(() => {
      props.onHide()

      props.onSaveSuccessful()
    })
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Finance Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submit}>

          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" onChange={e => setItem({...item, type: e.target.value})}>
              <option>Asset</option>
              <option>Liability</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={e => setItem({...item, name: e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBalance">
            <Form.Label>Balance</Form.Label>
            <Form.Control type="number" placeholder="0.00" step="0.01" onChange={e => setItem({...item, balance: parseInt(e.target.value, 10)})}/>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
          
        </Form>
      </Modal.Body>
    </Modal>
  )
}

AddFinanceItemDialog.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onSaveSuccessful: PropTypes.func
}

export default AddFinanceItemDialog
