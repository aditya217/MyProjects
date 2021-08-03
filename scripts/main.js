let userName = getUserName();
function getUserName()
{
    let userName = prompt("Enter Your Name");
    if(!userName)
    {
        getUserName();
    }
    else
    return userName;
}
document.getElementById('userName').textContent = 'Welcome '+userName;
const myImage = document.querySelector('img');
let flag = false;
myImage.onclick = function(){
    flag = !flag;
    if(flag)
    {
        myImage.src = 'images/firefox_logo2.jpg';
        let myHeader = document.querySelector('h1');
        myHeader.textContent = "Chrome is Awesome ";    
    }
    else
    {
        myImage.src = 'images/firefox_logo.jpg';
        let myHeader = document.querySelector('h1');
        myHeader.textContent = "Mozilla is Awesome";    
    }
}