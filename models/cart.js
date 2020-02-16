class Cart {
  constructor(initCart) {
    this.items = initCart.items || {};
    this.totalQty = initCart.totalQty || 0;
    this.totalPrice = initCart.totalPrice || 0;
  }

  addItem(product) {
    const id = product.id;
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { product, qty: 0, amount: 0 };
    }
    storedItem.qty++;
    storedItem.amount = storedItem.product.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.product.price;
  }

  getItems() {
    const items = [];
    for (var id in this.items) {
      items.push(this.items[id]);
    }
    return items;
  }
}

export default Cart;
