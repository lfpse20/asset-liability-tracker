import './networth.css'
import React from 'react'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import { formatCurrency } from '../../utils/currencyFormatter'

const NetWorth = (props) => {
  return (
    <Card className="outer-card">
      <Card.Body>
        <Card className="inner-card">
          <Card.Body>
            <Card.Subtitle className="text-muted">Assets</Card.Subtitle>
            <Card.Text className="item-balance">{formatCurrency(props.totalAssets)}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="inner-card">
          <Card.Body>
            <Card.Subtitle className="text-muted">Liabilities</Card.Subtitle>
            <Card.Text className="item-balance">{formatCurrency(props.totalLiabilities)}</Card.Text>
          </Card.Body>
        </Card>
        <div className="networth-text">
          Net Worth
        </div>
        <div className="networth-balance">{formatCurrency(props.networth)}</div>
      </Card.Body>
    </Card>
  )
}

NetWorth.propTypes = {
  totalAssets: PropTypes.number,
  totalLiabilities: PropTypes.number,
  networth: PropTypes.number
}

export default NetWorth
