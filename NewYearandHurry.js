//https://codeforces.com/problemset/problem/750/A

var input = readline();
input = input.trim().split(/\s+/);
var numberOfProblems = +input[0];
var travelTime = +input[1];

// There are only 4 hours to solve the problem which also includes travel time.
var totalTimeLeft = 240 - travelTime;

var solutionCount = 0;

var timeForAllSolutions = 0;

for (i=1;i<=numberOfProblems;i++){
    // cumulative math to figure out how much time it would take to solve all problems.
    timeForAllSolutions = timeForAllSolutions + 5 * i;

    if(timeForAllSolutions > totalTimeLeft)
    {
        break;
    }
    
    solutionCount++;
}

print(solutionCount);