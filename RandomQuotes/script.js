function generate(){
    let quotes = {
        "Albert Camus" :'"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "Richard Bach ":'" If you love someone set them free. If they come back they  are yours; if they dont they never were."',
        "Bob Dylan ":'"No one is free, even the birds are chained to the sky."'
    }
    let authors = Object.keys(quotes);
    //console.log(authors);

    let author= authors[Math.floor(Math.random() * authors.length)];
  

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}