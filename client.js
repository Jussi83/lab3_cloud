const axios = require('axios');

const data = {
  //data: 'O Hi this a test Car River Deer Car Bear and'  // response = 2 1 3 4 1 0 0 0 0 0 
  data: 'Malmö wicked man go prosper ye o dog' // response = 1 2 2 0 1 1 1 0 0 0
};

axios.post('https://gentle-reaches-48154.herokuapp.com/getWordLengthFrequency', data)
  .then((res) => {
    console.log(data);
    console.log();
    const words = res.data.split(" ");
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({ length: i + 1, frequency: parseInt(words[i]) })
    }
    console.table(arr);
  }).catch((err) => {
    console.error(err);
  });
