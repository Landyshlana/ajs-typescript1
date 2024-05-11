import Cart from '../cart/cart';
import Movie from '../buyable/movie';
import Book from '../buyable/book';
import MusicAlbum from '../buyable/music';
test('объект', () => {
	const cart = new Cart();
	expect(cart.items.length).toBe(0);
});

test('object', () => {
	const cart = new Cart();
	cart.add(new Book(1002, "War and Piece", "Leo Tolstoy", 2000, 1225));
	cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
	cart.add(
		new Movie(
			1011,
			"Marvel",
			2500,
			2012,
			"USA",
			"Avengers Assemble!",
			["action movie", "fantastic"],
			"137 мин"
		)
	);
	expect(cart.items.length).toBe(3);
});

test('object1', () => {
	const cart = new Cart();
	cart.add(new Book(1002, "War and Piece", "Leo Tolstoy", 2000, 1225));
	cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
	cart.add(
		new Movie(
			1001,
			"Marvel",
			2500,
			2012,
			"USA",
			"Avengers Assemble!",
			["action movie", "fantastic"],
			"137 мин",
			
		)
	);
    cart.removeItem(1001);
	expect(cart.items.length).toBe(2);
});
test('object1', () => {
	const cart = new Cart();
	cart.add(new Book(1002, "War and Piece", "Leo Tolstoy", 2000, 1225));
	cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
	cart.add(
		new Movie(
			1001,
			"Marvel",
			2500,
			2012,
			"USA",
			"Avengers Assemble!",
			["action movie", "fantastic"],
			"137 мин",
			
		)
	);
  
	expect(cart.totalPrice()).toBe(5400);
});
test('object1', () => {
	const cart = new Cart();
	cart.add(new Book(1002, "War and Piece", "Leo Tolstoy", 2000, 1225));
	cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
	cart.add(
		new Movie(
			1001,
			"Marvel",
			2500,
			2012,
			"USA",
			"Avengers Assemble!",
			["action movie", "fantastic"],
			"137 мин",
			
		)
	);
  
	expect(cart.discountPrice(50)).toBe(2700);
});