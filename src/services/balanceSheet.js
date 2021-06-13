const url = 'http://localhost:8080/api/balance-sheet/'

export const getBalanceSheet = async () => {
  const requestOptions = {
    method: 'GET'
  }

  const data = await fetch(url, requestOptions)
  return data.json()
}
