/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

var names = ["Yaakov", "John", "Jen", "Jason", "Paul",
  "Frank", "Larry", "Paula", "Laura", "Jim"
];

for (let i in names) {

  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter == 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}