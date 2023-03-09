// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * 
 * @returns {Promise<User>}
 */

const fetchUser = () => {
  return axios.get(url)
}

function startApp() {
  // axios
  //   .get(url)
  fetchUser
    .then(function (response) {
      console.log(response);
      user = response.data;
      username.innerHTML = user[0].name;
      email.innerHTML = user[0].email;
      address.innerHTML = user[0].address.street;
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
