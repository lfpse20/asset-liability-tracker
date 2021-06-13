import './App.css'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import NetWorth from './components/networth/networth'
import FinanceItemsTable from './components/financeItemsTable/financeItemsTable'
import AddFinanceItemDialog from './components/addFinanceItemDialog/addFinanceItemDialog'
import { getBalanceSheet } from './services/balanceSheet'

function App () {
  const [modalShow, setModalShow] = useState(false)
  const [balanceSheet, setBalanceSheet] = useState([])

  useEffect(() => {
    loadBalanceSheet()
  }, [])

  const loadBalanceSheet = () => {
    getBalanceSheet()
    .then(items => {
      setBalanceSheet(items)
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <Navbar className="bg-light justify-content-between">
        <Navbar.Brand>Asset-Liability Tracker</Navbar.Brand>
        <Button 
            variant="primary" 
            onClick={() => setModalShow(true)}
        >
          Add New Item
        </Button>
      </Navbar>

      <div className="App-body">
        <AddFinanceItemDialog
          show={modalShow}
          onHide={() => setModalShow(false)}
          onSaveSuccessful={() => loadBalanceSheet()}
        />

        <NetWorth
          networth={balanceSheet.netWorth}
          totalAssets={balanceSheet.totalAssetsBalance}
          totalLiabilities={balanceSheet.totalLiabilitiesBalance}
        />

        <div className="table-padding">
          <FinanceItemsTable
            assets={balanceSheet.assets}
            liabilities={balanceSheet.liabilities}
            onDeleteSuccessful={() => loadBalanceSheet()}
          />
        </div>
      </div>
    </div>
  )
}

export default App
