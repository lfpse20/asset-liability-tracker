const url = 'https://asset-liability-tracker.azurewebsites.net/api/balance-sheet/'

export const getBalanceSheet = async () => {
  const requestOptions = {
    method: 'GET'
  }

  const data = await fetch(url, requestOptions)
  return data.json()
}
