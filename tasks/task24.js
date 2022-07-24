// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (obj in contacts) {
    if (contacts[obj].firstName == name && contacts[obj].hasOwnProperty(prop)) {
      return console.log(contacts[obj][prop]);
    } else if (contacts[obj].firstName != name) {
      return console.log(contacts[obj].firstName);
    } else if (contacts[obj].hasOwnProperty(prop) == []) {
      return console.log("No such property");
    }
  }
}

lookUpProfile("Harry", "likes");
