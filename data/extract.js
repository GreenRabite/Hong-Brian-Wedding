const fs = require('fs');

const arr = fs.readFileSync('./guestlist-raw.csv').toString().split("\n");

console.log(arr[1]);
const invites = [];
arr.forEach(family => {
  let familyArr = family.split(',');
  invites.push([familyArr[0], familyArr[1], familyArr[2], familyArr[3], familyArr[5], familyArr[7]]);
});

console.log(invites[0]);
invites.forEach(invite => {
  if (invite[2] === '' && invite[5] === 'yes') {
    fs.appendFileSync('guestlist.txt',`{ username: "${invite[0]} ${invite[1]}", plusone: nil, capacity: ${invite[4]}, attending: 0, plus_one_bool: true },\n`,"UTF-8",{'flags': 'a+'});
  }else if(invite[2] === '') {
    fs.appendFileSync('guestlist.txt',`{ username: "${invite[0]} ${invite[1]}", plusone: nil, capacity: ${invite[4]}, attending: 0, plus_one_bool: false },\n`,"UTF-8",{'flags': 'a+'});
  }else if(invite[2] !== '' && invite[5] === 'yes') {
    fs.appendFileSync('guestlist.txt',`{ username: "${invite[0]} ${invite[1]}", plusone: "${invite[2]} ${invite[3]}", capacity: ${invite[4]}, attending: 0, plus_one_bool: true  },\n`,"UTF-8",{'flags': 'a+'});
  }else if (invite[2] !== '') {
    fs.appendFileSync('guestlist.txt',`{ username: "${invite[0]} ${invite[1]}", plusone: "${invite[2]} ${invite[3]}", capacity: ${invite[4]}, attending: 0, plus_one_bool: false  },\n`,"UTF-8",{'flags': 'a+'});
  }else {
    fs.appendFileSync('guestlist.txt',`issue,\n`,"UTF-8",{'flags': 'a+'});
  }
});

console.log('Fin');
