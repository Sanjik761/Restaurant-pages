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

menu.addEventListener('click', () => {
    body.style.cssText = 'background-size: 100%; background-image: url(https://hdwallsource.com/img/2019/4/fast-food-burgers-wallpaper-68908-71254-hd-wallpapers.jpg); background-repeat: no-repeat';
    homeDiv.textContent = 'McDonald MENU:';
    homeDiv.style.cssText = 'margin-left: 30px; color: white; width: 300px';
    matn.textContent = ' Sandwich: 3$ Hamburger: 3.5$  Cheeseburger: 5$  French Fries: 1$  Cheetos Chicken : 4$   Hot-Dogs: 2$';
    matn.style.cssText = 'border: 1px solid grey; border-radius: 15px; padding: 10px; color: white; font-size: 33px; width: 300px; opacity: 0.7; margin: 1px 0 0 30px;  box-shadow: 0 4px 8px 0 rgb(165, 164, 164), 0 6px 20px 0 rgb(165, 164, 164); ';
});
