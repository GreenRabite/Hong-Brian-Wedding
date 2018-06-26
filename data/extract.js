const fs = require('fs');

const arr = fs.readFileSync('./guestlist-raw.csv').toString().split("\n");

console.log(arr[1]);
const invites = [];
arr.forEach(family => {
  let familyArr = family.split(',');
  invites.push([familyArr[0], familyArr[1], familyArr[2], familyArr[3], familyArr[5]]);
});

console.log(invites[0]);
invites.forEach(invite => {
  if (invite[2] === '') {
    fs.appendFileSync('guestlist.txt',`{ username: "${invite[0]} ${invite[1]}", capacity: ${invite[4]}, attending: 0 },\n`,"UTF-8",{'flags': 'a+'});
  }else if(invite[1].toString() == invite[3].toString() || invite[3] === '') {
    fs.appendFileSync('guestlist.txt',`{ username: "${invite[0]}/${invite[2]} ${invite[1]}", capacity: ${invite[4]}, attending: 0 },\n`,"UTF-8",{'flags': 'a+'});
  }else {
    fs.appendFileSync('guestlist.txt',`{ username: "${invite[0]} ${invite[1]} / ${invite[2]} ${invite[3]}", capacity: ${invite[4]}, attending: 0 },\n`,"UTF-8",{'flags': 'a+'});
  }
});

console.log('Fin');
