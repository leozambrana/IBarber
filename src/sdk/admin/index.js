import { REACT_APP_API } from "..";

export const serviceAdd = async ({ name, price , duration}) => {
    const ans = await fetch(`${REACT_APP_API}/service`, {
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name, price, duration}),
    });
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