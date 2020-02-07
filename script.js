const main = document.getElementById('main');
const addUserBtn = document.getElementById('add_user');
const doubleBTN = document.getElementById('double');
const showMilliionairesBtn = document.getElementById('show_millionaires');
const sortBtn = document.getElementById('sort');
const calculateWeathBtn = document.getElementById('calculate_weath');

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

// Double evreyone money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  uppdateDom();
}

// Sort users by rischest
function sortByRischest() {
  data.sort((a, b) => b.money - a.money);

  uppdateDom();
}

// Show users by Milliionaires
function showMilliionaires() {
  data = data.filter(user => user.money > 1000000);

  uppdateDom();
}

// add new obj to data array
function addData(obj) {
  data.push(obj);

  uppdateDom();
}

function uppdateDom(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//Format number money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners

addUserBtn.addEventListener('click', getRandomUser);
doubleBTN.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRischest);
showMilliionairesBtn.addEventListener('click', showMilliionaires);
