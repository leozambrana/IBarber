import { REACT_APP_API } from "..";

export const login = async ({ username, password }) => {
  const ans = await fetch(`${REACT_APP_API}/login`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: username, password }),
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password }),
  });
  const response = await ans.json();
  return response;
};


