export const serviceAdd = async ({ name, price , duration}) => {
    const ans = await fetch(`${REACT_APP_API}/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, price, duration}),
    });
      const response = await ans.json();
      return response;
  }