export type ItemsOfArguments = {
  name: string,
  price: number,
}

export type IngridiensArguments = {
  type: string,
  inputType: string,
  items: ItemsOfArguments[]
}

export const INGREDIEENTS: IngridiensArguments[] = [
  {
    type: 'Вид лапши',
    inputType: 'radio',
    items: [
      { name: 'Гречневая', price: 0 },
      { name: 'Яичная', price: 0 },
      { name: 'Рисовая', price: 0 },
      { name: 'Фунчоза', price: 0 },
      { name: 'Стеклянная', price: 0 },
      { name: 'Пшеничная', price: 0 },
    ],
  },
  {
    type: 'Соусы на выбор',
    inputType: 'radio',
    items: [
      { name: '1', price: 0 },
      { name: '2', price: 0 },
      { name: '3', price: 0 },
    ],
  },
  {
    type: 'Дополнительно',
    inputType: 'checkbox',
    items: [
      { name: 'Перец халапеньо1', price: 0 },
      { name: 'Двойная порци2я курицы', price: 0 },
      { name: 'Перец халапе3ньо', price: 0 },
      { name: 'Двойная порци4я курицы', price: 0 },
      { name: 'Перец халапен5ьо', price: 0 },
      { name: 'Двойная порци6я курицы', price: 0 },
    ],
  },
];
