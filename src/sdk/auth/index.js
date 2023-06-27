import { REACT_APP_API } from "..";

export const login = async ({ username, password }) => {
  const email = username
  const ans = await fetch(`${REACT_APP_API}/login`, {
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ email , password }),
  });
  if (ans.status === 401) {
    throw new Error('Usuário ou senha inválidos');
  }
  const response = await ans.json();

  return response;
};

export const signUp = async ({ name, email, password }) => {
  const ans = await fetch(`${REACT_APP_API}/user`, {
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ name, email, password }),
  });
  const response = await ans.json();
  return response;
};


