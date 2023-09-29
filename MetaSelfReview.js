console.log("this is meta self review");

const getApiKey = Math.random() * 1000;
const day = new Date();

const owner = "Kyaw San";

const app= [ 

 {
                owner : owner,
                founder : owner ,
                apiKey : getApiKey,
                date : day,
                resourse: "Meta"
}

];

console.log(app);

console.log(`${app[0].owner} is testing. ${getApiKey}`);