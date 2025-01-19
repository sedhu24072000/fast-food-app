const API_URL = "https://6732dde42a1b1a4ae111244c.mockapi.io/api/v1/questions";

export async function getMenu() {
  const res = await fetch(`${API_URL}/food`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const  data  = await res.json();
  const result = data[0]
  const final = result.food
  return final;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/orders/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const data  = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
