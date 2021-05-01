
const tweetList = document.getElementById('tweet-list');

eventListeners();

function eventListeners(){
 document.querySelector('#form').addEventListener('submit',newTweet);
 
 tweetList = addEventListener('click',removeTweet);
 
 document.addEventListener('DOMContentLoaded',localStorageOnLoad)
}
