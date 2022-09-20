//https://codeforces.com/problemset/problem/231/A

var n = +(readline());
var out = 0;
for (var i = 0; i < n; i++) {
    var threeVal;
    var sum = 0;
    threeVal = readline();
    threeVal = threeVal.trim().split(/\s+/);
    for (var j =0; j < threeVal.length; j++){
        sum += +threeVal[j];
    }    
    if(sum >= 2) out = out + 1;
}
print(out);