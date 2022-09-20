//https://codeforces.com/problemset/problem/732/A

var input = readline();
input = input.trim().split(/\s+/);
var shovelPrice = +input[0];
var denominationOne = +input[1];
var flag = true;
var count = 0;
var totalCost = 0;

while (flag){
    count++;
    totalCost = shovelPrice * count;
    // Either total cost should be perfectly divisible by 10.
    // OR total cost when divided by 10 should give remainder equal to denominationOne.
    if (totalCost%10 == 0 || totalCost%10 == denominationOne){
        flag = false;
    }        
}

print(count);