const header = document.querySelector('header');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const body = document.querySelector('body');

header.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr 1fr;';
home.style.cssText = 'border: 1px solid black; text-align: center; font-size: 35px;';
menu.style.cssText = 'border: 1px solid black; text-align: center; font-size: 35px;';
contact.style.cssText = 'border: 1px solid black; text-align: center; font-size: 35px;';

body.appendChild(homeDiv);
body.appendChild(matn);
// home button
home.style.cssText = 'color: white; border: 1px solid white; text-align: center; font-size: 35px;';
body.style.cssText = 'background-size: 100%; background-image: url(http://images.summitmedia-digital.com/esquiremagph/images/2020/09/07/junk-food-aging.jpg); background-repeat: no-repeat';
homeDiv.textContent = 'Home Page';
homeDiv.style.cssText = 'color: white; text-align: center; font-family: sans-serif';
matn.textContent = "Welcome to Fast-Food Restaurant";
matn.style.cssText = 'color: white; font-size: 20px ';

home.addEventListener('click', () => {
    body.style.cssText = 'background-size: 100%; background-image: url(http://images.summitmedia-digital.com/esquiremagph/images/2020/09/07/junk-food-aging.jpg); background-repeat: no-repeat';
    homeDiv.textContent = 'Home Page';
    homeDiv.style.cssText = 'color: white; text-align: center; font-family: sans-serif';
    matn.textContent = "Welcome to Fast-Food Restaurant";
    matn.style.cssText = 'color: white; font-size: 20px ';
});

// menu button
menu.style.cssText = 'color: white; border: 1px solid white; text-align: center; font-size: 35px;';
