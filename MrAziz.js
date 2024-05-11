let cars = [
  {
    name: 'BMW',
    color: 'white',
    model: 'M4',
    price: 80000,
    year: 2020
  },
  {
    name: 'Gentra',
    color: 'black',
    model: '2',
    price: 15000,
    year: 2022
  },
  {
    name: 'Kia',
    color: 'white',
    model: 'K5',
    price: 42000,
    year: 2023
  },
  {
    name: 'Matiz',
    color: 'red',
    model: 'best',
    price: '6000',
    year: 2011
  },
  {
    name: 'Malibu',
    color: 'gray',
    model: "2",
    price: 37000
  },
  {
    name: 'Nexia',
    color: 'blue',
    model: "3",
    price: 12000
  }
]; 
let cheap = cars.filter(item => +item.price < 35000);
let expensive = []
cars.forEach(item_2 => {
  if(item_2.price > 35000) {
    expensive.push(item_2)
  }
});
console.log(cheap,expensive);