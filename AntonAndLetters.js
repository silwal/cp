//https://codeforces.com/problemset/problem/443/A


var isAlpha = function(ch){
    return /^[A-Z]$/i.test(ch);
  }

var input = readline();
input = input.split('');
var  op = new Set();

for (var i = 0; i< input.length; i++)
{
    if(isAlpha(input[i])){
        op.add(input[i]);
    }
}
print(new Set(op).size);