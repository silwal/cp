//https://codeforces.com/problemset/problem/266/B

var childrenAndTime = readline();
childrenAndTime = childrenAndTime.trim().split(/\s+/);
var childrenCount = +childrenAndTime[0];
var time = +childrenAndTime[1];

var initialArrangement = readline();
initialArrangement = initialArrangement.split('');

for (var i = 0; i < time; i++) {
    for (var j = 0; j < childrenCount; j++) {
        if (initialArrangement[j] == 'B' && initialArrangement[j + 1] == 'G') {
            initialArrangement[j] = 'G';
            initialArrangement[j + 1] = 'B';
            j++;
        }
    }
}
print(initialArrangement.join(''));