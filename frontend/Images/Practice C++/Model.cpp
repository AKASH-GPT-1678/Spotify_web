#include <iostream>
#include <string>
using namespace std;

int main()
{
    int number;
    cout << "Enter Your Number" << endl;
    cin >> number;
    int orignalnumber = number;
    int reversenumber = 0;

    while(number > 0){
        int Last = number % 10;
        reversenumber = (reversenumber * 10) + Last;
        number = number / 10 ; 


    }

    cout << reversenumber  << endl;

    if(orignalnumber == reversenumber){

        cout << "The Number is Absolute Pandindomr" << endl;
    }
    else{
        cout << "This is Not Palindrome" << endl ;
    }



    return 0;
}