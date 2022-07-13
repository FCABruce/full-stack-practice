/*
.split() - splits a string into an array of substring "hello cheska".split(" ") -> hello,cheska
                                                       "hello cheska".split("") -> h,e,l,l,o,c,h,e,s,k,a
                                                    "hello cheska".split("a") -> hello chesk,
.reverse() - reverse an array in place, last element cevomes the first 
.join() - is an array function that joins the elements togeter ["hello","cheska"].join("") -> "hello cheska"
                                                             ["hello","cheska"].join("-") -> "hello-cheska"            
*/

word = "abcd".split("")
reversed = word.reverse()
console.log(reversed.join(""))