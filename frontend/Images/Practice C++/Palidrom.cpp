#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
using namespace std;


int main(){
   
    vector<int> numbers = {};
    int N  = sizeof(numbers) / sizeof(numbers[0]);


    sort(numbers.begin() , numbers.end());
    int Max = max(numbers);

    return 0;

}