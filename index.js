import { initLight, switchLight } from './traffic-light.js';

const btnNode = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode); // инициализировали цвет

btnNode.addEventListener('click', () => {
  switchLight(trafficLightNode);
}); // изменяем цвет при нажатии на кнопку
