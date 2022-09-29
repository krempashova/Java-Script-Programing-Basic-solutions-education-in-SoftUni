function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let searcBook = input[index];
    index++;
    let bookcounter = 0;
    while (searcBook !== "No More Books") {
        if (searcBook === favoriteBook) {
           break;
        }
        bookcounter++;
        searcBook = input[index];
        index++;

    }
    if (searcBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookcounter} books.`)
    }
    else if (searcBook === favoriteBook) {
        console.log(`You checked ${bookcounter} books and found it. `);
    }






}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


