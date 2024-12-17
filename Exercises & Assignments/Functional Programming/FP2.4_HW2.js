const items = [
    { id: 1, item: "Item 1", status: "In Sale" },
    { id: 2, item: "Item 2", status: "New Release" },
    { id: 3, item: "Item 3", status: "New Release" },
    { id: 4, item: "Item 4", status: "In Sale" },
    { id: 5, item: "Item 5", status: "In Sale" }
  ]
  
  
  
  const itemListContainer = document.querySelector("#itemList");
  const filterRadioButttons = document.getElementsByName("items");
  
  function renderItems(selectedItem){
  
    const filteredItems = selectedItem === "All Items" ? items: items.filter(item => item.status === selectedItem)
  
    const itemListHTML = filteredItems.map(item => `
    <li>
      <strong>ID:</strong> ${item.id} <br>
      <strong>Item:</strong> ${item.item}<br>
      <strong>Status:</strong> ${item.status}<br>  
      <hr>
      </li>
      `)
    itemListContainer.innerHTML = itemListHTML.join('');
  }
  
  renderItems('all')
  
    filterRadioButttons.forEach(radioBtn => {
      radioBtn.addEventListener('change', function(){
        renderItems(this.value)
      })
    })