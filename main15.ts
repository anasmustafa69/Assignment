let guestlist =["Wajid", "Sohail", "Rehan", "Bilal"];
for (let i=0; i<=3; i++)
console.log(guestlist[i]," You're invited for dinner at my home ");
console.log("bilal cant make to come at the dinner");
guestlist[3]= "Anas" ;
let guestlist2 =["Wajid", "Sohail", "Rehan", "Anas"];
for (let i=0; i<=7; i++)
console.log(guestlist2[i]," You're invited for dinner at my home ");
console.log("Great news! I found a bigger dinner table.");
guestlist2 = ["Sir Ishaq", ...guestlist2];

guestlist2.push("usman");
guestlist2.push("ismail");

console.log(guestlist2);

guestlist2.forEach(guestlist2 => {
    console.log(`Dear ${guestlist2}, you are cordially invited to dinner.`);
});
