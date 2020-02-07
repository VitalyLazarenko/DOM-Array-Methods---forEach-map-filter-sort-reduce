const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBTN = document.getElementById('double');
const showMilliionairesBtn = document.getElementById('show-milliionaires');
const sortBtn = document.getElementById('sort');
const calculateWeathBtn = document.getElementById('calculate-weath');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// featch random user and money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

// add new obj to data array
function addData(obj) {
  data.push(obj);
}
