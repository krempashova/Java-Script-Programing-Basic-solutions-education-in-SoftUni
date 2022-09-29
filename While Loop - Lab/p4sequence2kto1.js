function sequence2kto1(input) {
    let n = Number(input[0]);
    let numberbetweenn = 0;
    while (numberbetweenn < n) {
        numberbetweenn = (numberbetweenn * 2) + 1;
        if(numberbetweenn<=n){
            console.log(numberbetweenn);
        }
       
    }
}
sequence2kto1(["8"])