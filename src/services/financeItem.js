const url = 'http://localhost:8080/api/finance-item/'

export const addFinanceItem = async (item) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  }

  const data = await fetch(url, requestOptions)
  return data.json()
}

export const deleteFinanceItem = async (id) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }

  return fetch(url + id, requestOptions)
}
