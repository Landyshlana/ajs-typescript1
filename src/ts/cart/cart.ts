import Buyable from '../buyable/buyable';
export default class Cart {
	private _items: Buyable[] = [];

	add(item: Buyable): void {
		this._items.push(item);
	}
	get items(): Buyable[] {
		return [...this._items];
	}

	totalPrice(): number {
		return this.items.reduce((total, item) => total + item.price, 0);
	}
	discountPrice(discount: number): number {
		return this.totalPrice() * (1 - discount / 100);
	}

	removeItem(id: number): void {
		this._items = this._items.filter((item: Buyable) => item.id !== id);
	}
}