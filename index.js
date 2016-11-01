var greeting = "Awww yea";

var specialGuest = "Neil deGrasse Tyson"

var greetSpecialGuest = "" + specialGuest + "!";

var topic = "space";

var conversation = `${topic}`;

var writeGreetingToDocument = 'document.getElementById(\'greeting\').innerHTML = greeting`;

// Type your answer into the console without the quote marks and see if it works.

var customCelebration = 'Kaboomie! Hachewie, yeaaaaaaaah. Shwing.';

var consoleCelebration = `something to do with console...`;

// Next, change the style of the greeting using only JavaScript. It make the greeting have a size of 28 pixels, make it bold, make it blue,

document.write(greeting.big().bold().fontcolor("black"), "<br /><hr />");

var age = 32;

if ((age >= 5) && (age <= 6)) {
  document.write("Go to kindergarten" + "<br />");
} else if (30 < age > 18) {
  document.write("Go to College" + "<br />");
} else if (age > 30) {
  document.write("It's never too late buddy" + "<br />")
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}

// Other logical operators
document.write("true || false: ", true || false, "<br />");
document.write("!true is equal to: ", !true,  "<br />");

document.write("\"5\" == 5 = ",("5" == 5), "<br />");
document.write("\"5\" === 5 = ",("5" === 5), "<br />");

