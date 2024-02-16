let current_users = ["ahmed", "ali", "admin", "fatima", "sana"];
let new_users = ["amna", "Admin", "zainab", "ALI", "farhan"];

for (let new_user of new_users) {
    let lowercase_new_user = new_user.toLowerCase();
    let username_exists = current_users.map(user => user.toLowerCase()).includes(lowercase_new_user);

    if (username_exists) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
