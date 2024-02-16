let guestlist =["Wajid", "Sohail", "Rehan", "Bilal"];
for (let i=0; i<=3; i++)
console.log(guestlist[i]," You're invited for dinner at my home ");
console.log("bilal cant make to come at the dinner");
guestlist[3]= "Anas" ;
let guestlist2 =["Wajid", "Sohail", "Rehan", "Anas"];
for (let i=0; i<=3; i++)
console.log(guestlist2[i]," You're invited for dinner at my home ");
console.log("Great news! I found a bigger dinner table.");
guestlist = ["Sir Ishaq", ...guestlist];
console.log(guestlist);
guestlist.splice("usman");

guestlist.push("ismail");

guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist}, you are cordially invited to dinner`);
});
console.log("Bad news! The new dinner table won't arrive in time, so I can only invite two people for dinner.");
while (guestlist.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry , I can't invite you to dinner.`);
}
console.log(`Dear ${guestlist[0]}, you are still invited to dinner.`);
console.log(`Dear ${guestlist[1]}, you are still invited to dinner.`);
guestlist.pop();
guestlist.pop();

console.log("Remaining guests:", guestlist);