let num = 78439;
let temp;
temp = num;
let p = 0;
let x = 0;
let lastDigit;

while(temp!=0){
    lastDigit = temp % 10;
    p = p+1;
    temp = (temp-lastDigit)/10;
}

temp=num;
while (temp!=0){
    lastDigit = temp % 10;
    x = x + (lastDigit ** p)
    temp = (temp - lastDigit)/10;
}

if (x == num){
    console.log ( " It is an armstrong num");
}else{
    console.log ( " It is not an armstrong num");
}
