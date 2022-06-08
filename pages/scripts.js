const getRandomUserData = () => {
    fetch("https://randomuser.me/api/")
    .then((data) => data.json())
    .then((data) => console.log(data));

};

getRandomUserData();