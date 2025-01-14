export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}
export function clearPreviousTracking() {
  const url = new URL(window.location.href);
  url.searchParams.delete('orderId');
  url.searchParams.delete('productId');
  window.history.replaceState({}, '', url);
}
function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function getOrder(orderId) {
  let matchingOrder;

  orders.forEach((order) => {
    if (order.id === orderId) {
      matchingOrder = order;
    }
  });

  return matchingOrder;
}
