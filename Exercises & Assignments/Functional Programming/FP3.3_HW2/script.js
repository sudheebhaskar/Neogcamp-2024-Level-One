const items = [
    { id: 1, item: "Item 1", price: 10 },
    { id: 2, item: "Item 2", price: 20 },
    { id: 3, item: "Item 3", price: 15 },
    { id: 4, item: "Item 4", price: 25 }
  ];
  
  function renderItemList(items) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = items.map(item => {
      return `<li>${item.item} - $${item.price}</li>`;
    }).join('');
  }
  
  
  const { totalCost, averageCost } = items.reduce((acc, item, index, array) => {
    acc.totalCost += item.price;
    if (index === array.length - 1) {
      acc.averageCost = acc.totalCost / array.length;
    }
    return acc;
  }, { totalCost: 0, averageCost: 0 });
  
  
  function renderCostInfo(totalCost, averageCost) {
    document.getElementById('totalCost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById('averageCost').textContent = `Average Cost: $${averageCost.toFixed(1)}`;
  }
  
  renderItemList(items);
  
  
  renderCostInfo(totalCost, averageCost);
  