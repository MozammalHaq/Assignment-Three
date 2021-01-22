
/**
 ----------------------------------------------------------------
    Assignment-01
    This is a converter from Kilometer to Meter.
 */

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000; // 1 kilometer = 1000 meter

    //error message
    if (kilometer <= 0) {
        console.log("Your input number is negative, Please input positive number.")
    }
    return meter;
}

var inputKilometer = kilometerToMeter(5);
console.log(inputKilometer);

//End Assignment-01 ---------------------------------------------


/**
 ----------------------------------------------------------------
    Assignment-02
    This is a Budget Calculator;
*/


function budgetCalculator(watch, phone, laptop) {
    var totalBuget = watch * 50 + phone * 100 + laptop * 500;

    //error message
    if (watch < 0 || phone < 0 || laptop < 0) {
        console.log("Your input number is negative, Please input positive number.")
    }
    return totalBuget;
}

var totalCost = budgetCalculator(3, 3, 4);
console.log(totalCost);

//End Assignment-02 ---------------------------------------------


/**
 ----------------------------------------------------------------
    Assignment-03
    Make Hotel cost per night.
*/

function hotelCost(night) {
    var totalHotelCost = 0;
    if (night < 0) {
        console.log("Wrong Input.")
    } else if (night <= 10) {
        totalHotelCost = night * 100;
    } else if (night <= 20) {
        var tenNight = 10 * 100;
        var remainingNight = night - 10;
        var extraNight = remainingNight * 80;
        totalHotelCost = tenNight + extraNight;
    } else {
        var tenNight = 10 * 100;
        var extraNight = 10 * 80;
        var remainingNight = night - 20;
        var extraMoreNigth = remainingNight * 50;
        totalHotelCost = tenNight + extraNight + extraMoreNigth;
    }
    return totalHotelCost;
}
var allHotelCost = hotelCost(11);
console.log(allHotelCost);

//End Assignment-03 ---------------------------------------------


/**
 ----------------------------------------------------------------
    Assignment-04
    Find big friend name from array and print it.
*/

function megaFriend(names) {
    var largeName = names[0];
    for (var i = 0; i < names.length; i++) {
        var maxLength = names[i];
        if (maxLength.length > largeName.length) {
            largeName = maxLength;
        }
    }
    return largeName;
}

var frindsName = ["Mamun", "Mozammal Haq", "Alamgir", "Noman Ali Khan", "Habib", "Misbah", "Kamal Hossain"];
var megaFriendName = megaFriend(frindsName);
console.log(megaFriendName);

//End Assignment-03 ---------------------------------------------