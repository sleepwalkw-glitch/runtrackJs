let numbers = [30,22,3,4,13,34,54,5,0];

function tri(numbers,order){
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(order === "asc" && numbers[i]>numbers[j]){
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
            if (order === "desc" && numbers[i]<numbers[j]){
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

console.log(tri(numbers, "asc"));
console.log(tri(numbers, "desc"));