"use strict";

//task#1

function task1() {
	let number = parseInt(prompt("Задайте целое число от 0 до 999"));
	if (!Number.isInteger(number) || number < 0 || number > 999) {
		console.log("Значение должно быть целым в диапазоне от 0 до 999");
		return {};
	} else {
		let obj = {
			units: number % 10,
			tens: Math.floor((number / 10) % 10),
			hundreds: Math.floor(number / 100),
		};
		console.log(obj);
	}
}

//task#1v1

function task1v1ES5() {
	function Product(name, price) {
		this.name = name;
		this.price = price;
	}
	Product.prototype.make25PercentDiscount = function () {
		this.price = this.price - this.price * 0.25;
	};
	let prod1 = new Product("Phone", 500);
	console.log(prod1);
	prod1.make25PercentDiscount();
	console.log(prod1);
}

function task1v1ES6() {
	class Product {
		constructor(name, price) {
			this.name = name;
			this.price = price;
		}
		make25PercentDiscount() {
			this.price = this.price - this.price * 0.25;
		}
	}
	let prod1 = new Product("Phone", 500);
	console.log(prod1);
	prod1.make25PercentDiscount();
	console.log(prod1);
}

//task#1v2

function task1v2ES5() {
	function Post(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}
	Post.prototype.edit = function (editText) {
		this.text = editText;
	};

	let post1 = new Post("John", "Hello World!", new Date());
	console.log(post1);
	post1.edit("This is ES5 for John");
	console.log(post1);

	function AttachedPost(author, text, date) {
		Post.call(this, author, text, date);
		this.highlighted = false;
	}
	AttachedPost.prototype = Object.create(Post.prototype);
	AttachedPost.prototype.constructor = AttachedPost;
	AttachedPost.prototype.makeTextHighlighted = function () {
		this.highlighted = true;
	};
	let post2 = new AttachedPost("Greg", "Hello World!", new Date());
	console.log(post2);
	post2.makeTextHighlighted();
	post2.edit("This is ES5 for Greg");
	console.log(post2);
}

function task1v2ES6() {
	class Post {
		constructor(author, text, date) {
			this.author = author;
			this.text = text;
			this.date = date;
		}
		edit(editText) {
			this.text = editText;
		}
	}
	let post1 = new Post("John", "Hello World!", new Date());
	console.log(post1);
	post1.edit("This is ES6 for John");
	console.log(post1);

	class AttachedPost extends Post {
		constructor(author, text, date) {
			super(author, text, date);
			this.highlighted = false;
		}
		makeTextHighlighted() {
			this.highlighted = true;
		}
	}
	let post2 = new AttachedPost("Greg", "Hello World!", new Date());
	console.log(post2);
	post2.makeTextHighlighted();
	post2.edit("This is ES6 for Greg");
	console.log(post2);
}
