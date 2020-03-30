function Book(title, author, volume, price){
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

var html = new Book("웹 표준", "김성호", "200", "25000");
var youtube = new Book("유튭 영상 만들기", 'kim', '286', '16000');

var bookList = [html, youtube];

for(var i = 0;i <2;i++){
    document.write("<p>" + bookList[i].title + "</p>");
}