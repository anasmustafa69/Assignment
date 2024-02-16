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