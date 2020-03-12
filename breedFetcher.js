const request = require('request');
const breedType = process.argv[2];

request(`https://mnhuhntypoapi.thecatapi.com/v1/breeds/search?q=${breedType}`, (error, response, body) => {
  if (error) {
    throw error;
  }
  const data = JSON.parse(body);

  const searchReq = (data) => {
    if (data.length === 0) {
      console.log("ALF: Sorry guys, no more cats -  it's time to eat pizza");
    } else {
      console.log(data[0].description);
    }
  };
  searchReq(data);
});