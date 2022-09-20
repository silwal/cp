//https://codeforces.com/problemset/problem/158/A

var np = readline();
var scores = readline();
var counter = 0;

np = np.trim().split(/\s+/);
scores = scores.trim().split(/\s+/);

var advScore = scores[np[1]-1];

for(var i = 0; i < scores.length; i++){
    if (+scores[i] >= +advScore && +scores[i] > 0 ) counter ++;
}
print(counter);
