import Cart from './cart/cart';
import Book from './buyable/book';
import MusicAlbum from './buyable/music';
import Movie from './buyable/movie';
const cart = new Cart();
cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
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
console.log(cart.items);