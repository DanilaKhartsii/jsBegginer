'use strict';

function task1() {
    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log('0 - это ноль');
        } else if (i % 2 == 0) {
            console.log(i + ' - четное число');
        }
        if (i % 2 == 1) {
            console.log(i + ' - нечетное число');
        }        
    }
}

function task2() {
    const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, //вывести это число
                }
            },
            {
                userId: 5,
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1, //вывести это число
                }
            },
        ]
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}

function task3() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000
        },
    ];
    products.forEach(function(element){
        element.price = element.price * 0.85;    
    });
    console.log(products);
}

function task4() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                '1.jpg',
                '2.jpg',
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                '3.jpg'
            ]
        },
        {
            id: 8,
            price: 78
        },
    ];

    let productsWithPhotos = products.filter(function (element){
        if (element.photos == undefined){
            return;
        }
        return element.photos.length > 0;
    });
    console.log(productsWithPhotos);

    let productsSort = products.sort(function(a, b){
        return a.price - b.price;
    });    
    console.log(productsSort);
}

function task5() {
    function logNumber(arg) {
        console.log(arg);
        return arg;
    }
    for (let i = 0; logNumber(i) < 9; i++) {};
}

function task6() {
    for (let i = 'x'; i.length < 21; i += 'x') {
        console.log(i);
    }
}
