/**
 Create a function that determines whether or not a given year is a leapyear 

 Leap years are years divisible by four (like 1984 and 2004).
However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 
(like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
 */

function leapYear(year){
    
    if((year%100 == 0) ){
        if(year%400==0){
            console.log(year + " is a leap year")
        }else{
            console.log(year + " is NNOOT a leap year")
        }
    } else if(year%4==0){
        console.log(year + " is a leap year")
    }else{
        console.log(year + " is NNOOOTT a leap year")
    }
}

leapYear(2005
    )