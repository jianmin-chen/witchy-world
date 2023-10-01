export const encodeQuery = data => {
  let res = Object.keys(data).map(key => `${key}=${data[key]}`)
  return res.length ? `?${res.join('&')}` : ''
}

export const get = async ({ route, data = {} }) =>
  new Promise((resolve, reject) =>
    fetch(encodeURI(route + encodeQuery(data)))
      .then(res => res.json())
      .then(res => {
        if (!res.success) return reject(res)
        resolve(res)
      })
  )

export const post = async ({ route, data = {} }) =>
  new Promise((resolve, reject) =>
    fetch(route, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (!res.success) return reject(res)
        resolve(res)
      })
      .catch(err => reject(err.message))
  )

export const patch = async({ route })
