// Conditions \\\\\\\\\\\\\\\\\\\\\

// if

// var goodDay = true;

// if (goodDay == true)
// {
//     console.log("Lets go to the park");
// }

// if-else \\\\\\\\\\\\\\\\\\\\\\\\\\

// var money = 200;
// var price = 300;

// if(money>price)
// {
//     console.log('Thats good no problem ');
// }

// else
// {
//     console.log('Forger about that');
// }

// if-else and / or \\\\\\\\\\\\\\\\\

var restaurant = true;
var money = 500;
var freeTime = true;

// if 
// (restaurant == true && money > 400)
// {
//     console.log('Order Food');
// }

// if 
// (restaurant == true && money > 400 && freeTime == true)
// {
//     console.log('Lets Order Food');
// }

// if 
// ( restaurant == true || money > 700 )
// {
//     console.log('Lets Order Food');
// }

// if 
// ((restaurant == true && money > 700) || freeTime == true )
// {
//     console.log('Lets Order Food');
// }

// else
// {
//     console.log('A very bad day without any meal.')
// }

// Nested if else \\\\\\\\\\\\\\\\\\

// var iphone = 300;
// var sony = 250;
// var xiaomi = 100;
// var budget = 250;

// if (budget > iphone)
// {
//     console.log('Lets buy iphone-x');
// }

// else if (budget >= sony)
// {
//     console.log('Alright Sony is also good');
// }

// else
// {
//     console.log("Sorry go for xiaomi");
// }

// Nested if else \\\\\\\\\\\\\\\\\\\

var iphone = 300;
var sony = 250;
var xiaomi = 100;
var budget = 400;
var original = false;

if (budget > iphone)
{
    if (original == true)
    {
        console.log('Lets buy iphone-x');
    }
    else
    {
        console.log('Forget about i-phone')
    }
}

else if (budget > sony)
{
    console.log('Alright Sony is also good');
}

else
{
    console.log("Sorry go for xiaomi");
}

