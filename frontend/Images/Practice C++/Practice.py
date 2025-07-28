import re

class Solution():
    def myAtoi(self, s):
        atoi = ""
        isPostive = True
        INT_MIN = -2147483648
        INT_MAX = 2147483647
        pattern = r"[+\-\d\s]"

        for word in s:
            Check = bool(re.match(pattern, word))

            if word == "-":
                if atoi: 
                    break
                isPostive = False 
            

            if atoi and atoi.isdigit() and bool(re.match(r"[A-Za-z\s!@#$%^&*()_+=\-{}\[\]|\\:;'\"<>,.?/~`]", word)):
                break
        

            elif atoi == "" and bool(re.match(r"[A-Za-z!@#$%^&*()_{}\[\]|\\:;'\"<>,.?/~]", word)):
                return 0
           


            elif Check and bool(re.match(r"\d", word)):
                atoi += word

        if not atoi: 
            return 0

        num = int(atoi) if isPostive else -int(atoi)

        if num > INT_MAX:  
            return INT_MAX
        elif num < INT_MIN:
            return INT_MIN

        return num









Trail = Solution()

print(Trail.myatoi("42"))

class Solution(object):
    def isPalindrome(self, x):
        for word in x:
            
    
    

