const BASE_URL = 'http://localhost:8080';

export const signup = async (email: string, password: string, name: string)=> {
    const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
            email, password, name
        }),
      })
    
      return await response.json()
      // console.log('data', data)
    //   console.log('errors', errors)
}

export const signin = async (email: string, password: string)=> {
  const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
          email, password
      }),
    })
  
    const data = await response.json();
    return data;
}