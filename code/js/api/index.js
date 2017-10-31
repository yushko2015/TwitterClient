import Url from 'url';
let timeInMs = Date.now();
let URL = 'https://api.twitter.com/1.1/search/tweets.json?q=';
export default query =>{
   // console.log(query)
    if (query) {
        URL += query+"&screen_name=Andriy_Yushko";
    } else{
        URL += "javascript"+"&screen_name=Andriy_Yushko";
    }
    
    console.log(timeInMs);
    return fetch(URL, {
        mode : "no-cors",
        method : "GET",
        headers: {
            'Authorization':'OAuth oauth_consumer_key="H0Kt4ZID3ho3bpwv8hg7NIds4",oauth_token="923215771861479424-b5FCwyemuzLSM6XiV68mOXsUhGCHDs3",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1509451014",oauth_nonce="dgRuem",oauth_version="1.0",oauth_signature="BMDqi%2FdRDdErg7sTNr46W6VTa%2F0%3D"'
        }
    })
    .then(response => {
            console.log(response);
            return Promise.all([response, response.json()])
        })
        .catch(error => {
            console.log(error);
        });
        
}