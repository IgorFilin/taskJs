function friend(friends){
 let newListFriends = friends.filter(el => el.length === 4)
    return newListFriends
}

friend(["Ryan", "Kieran", "Mark"])