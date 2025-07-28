Value = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}


class Solution(object):
    def intToRoman(self, num):
        repres = ["I", "V", "X", "L", "C", "D", "M"]
        Lan = len(str(num)) 
        str_name = str(num)
        Output = ""
        ini = 0

        while True: 
            First = int(str_name[0])  
            print(First)
            
            if Lan == 4 and First:


                
                Output += "M" * First
                Lan -= 1
                str_name = str_name[1:]  
           
            while True:  
                #  
                    Var = 5
                    if First in [1, 2, 3]:
                        Output += repres[Var] * First  

                    if First == 4:
                        Output += repres[Var] + repres[5 - ini]

                    if First == 9:
                        Output += repres[Var] + repres[6 + ini]

                    if First in [5, 6, 7, 8]:
                        Output += repres[Var] + (First - 5) * "C"

                    str_name = str_name[1:]
                    ini += 1
                    Var -= 1

                    break  # Breaks out of the inner while loop  

     




            
            


timepass = 5 
print(0 * "C")


array = [1 , 2 ,3 ,5 ,6 ,7 ]
print(array[1 + 2])
    
        




num = "92345"

# Salushan = Solution()
# print(Salushan.intToRoman(3800))


