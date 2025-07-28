import re


Word = "[1-9]"

rest = "K9872"
print(bool(re.match(Word , rest)))

text = "The India is My  Country"




print(bool(re.match("^The" , text)))




"Country$"
print(bool(re.findall("Country$" , text)))