import './financeItemsTable.css'
import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Trash } from 'react-bootstrap-icons'
import PropTypes from 'prop-types'
import { deleteFinanceItem } from '../../services/financeItem'
import { formatCurrency } from '../../utils/currencyFormatter'

const FinanceItemsTable = (props) => {

  const handleDelete = (id) => {
    deleteFinanceItem(id)
    .then((response) => {
      if (response.ok) {
        props.onDeleteSuccessful()
      }
    })
  }

  const getRows = (items) => {
    if (!items) {
      return
    }

    return items.map(item => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td className="text-align">{formatCurrency(item.balance)}</td>
          <td >
            <Button className="button-align" variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
              <Trash />
            </Button>
          </td>
        </tr>
      )
    })
  }

  let assets = getRows(props.assets)
  let liabilities = getRows(props.liabilities)

  return (
    <div>
      <Card className="table-card">
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-align" >Name</th>
                <th className="text-align">Type</th>
                <th className="text-align">Balance</th>
                <th className="text-align width-align">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets}
              {liabilities}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

FinanceItemsTable.propTypes = {
  assets: PropTypes.array,
  liabilities: PropTypes.array,
  onDeleteSuccessful: PropTypes.func
}

export default FinanceItemsTable
