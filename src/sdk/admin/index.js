import { REACT_APP_API } from "..";

export const serviceAdd = async ({ name, description, price , duration, barberShopId}) => {
    const ans = await fetch(`${REACT_APP_API}/service`, {
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name, description, price, duration, barberShopId}),
    })
      const response = await ans.json();
      return response;
  }

  export const hoursAdd = async ({ weekDays, excludedDates }) => {
    try{
      const response = await fetch(`${REACT_APP_API}/hours`);
      const responseData = await response.json();

      if(responseData){
        await fetch(`${REACT_APP_API}/hours`, {
          method: 'PUT',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify(weekDays, excludedDates)
        });
        console.log('Horário atualizado com sucesso!');
      }else {
        // Horário não existe na semana, fazer requisição POST para criar
        await fetch(`${REACT_APP_API}/hours`, {
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify(weekDays, excludedDates)
        });
        console.log('Horário criado com sucesso!');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao realizar a requisição:', error);
    }
  }

  export const userGet = async () => {
    const ans = await fetch(`${REACT_APP_API}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      const response = await ans.json();
      return response;
  }

  export const employeeAdd = async ({ name, email, password, adminStatus, barberShopId, document}) => {
    console.log(name, email, password, adminStatus, barberShopId, document)
    const ans = await fetch(`${REACT_APP_API}/employee`, {
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name, email, password, adminStatus, barberShopId, document}),
    })
    console.log(ans.status)
      const response = await ans.json();
      console.log(response)
      return response;
  }

  export const employeeGet = async (barberShopId) => {
    const ans = await fetch(`${REACT_APP_API}/employees?id=${barberShopId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      const response = await ans.json();
      return response;
  }

  export const employeeDelete = async (idEmployee) => {
     await fetch(`${REACT_APP_API}/employee/${idEmployee}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }) 
  }