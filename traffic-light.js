// в этом файле написана логика работы светофора

const LIGHTS = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
}; // хранит по ключу нужное значение цвета

const CLASSES_BY_LIGHT = {
  [LIGHTS.red]: 'traffic-light_red',
  [LIGHTS.yellow]: 'traffic-light_yellow',
  [LIGHTS.green]: 'traffic-light_green',
}; // хранит по ключу нужного цвета нужный класс

const NEXT_LIGHT_BY_LIGHT = {
  [LIGHTS.red]: LIGHTS.green,
  [LIGHTS.green]: LIGHTS.yellow,
  [LIGHTS.yellow]: LIGHTS.red,
}; // хранит по ключу нужного цвета новый цвет для переключения

let currentLight = LIGHTS.red;

export function switchLight(node) {
  const currentClass = CLASSES_BY_LIGHT[currentLight];
  const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight];
  const nextClass = CLASSES_BY_LIGHT[nextLight];

  currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];

  node.classList.replace(currentClass, nextClass);
} // функция которая заменяет класс у div

export function initLight(node) {
  node.classList.add(CLASSES_BY_LIGHT[currentLight]);
} // функция которая добавляет класс красного цвета первый раз
