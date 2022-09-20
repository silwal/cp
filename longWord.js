//https://codeforces.com/problemset/problem/71/A

var n = parseInt(readline());
for (var i = 0; i < n; i++) {
    var longWord = readline();
    var len = longWord.length;
    if (len > 10) {
        var first = longWord.substring(0, 1);
        var last = longWord.substring(len - 1, len);
        print(first + String(len - 2) + last);
    }
    else print(longWord);
}