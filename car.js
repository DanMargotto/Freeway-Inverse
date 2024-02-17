// Código do carro

let xCars = [-100, -100, -100, -100, -100, -100];
let yCars = [50, 120, 190, 265, 330, 400];
let speedCars = [1.5, 2, 2.5, 3, 2.3, 1.8];

// Dimensão Carro
let wCar = 70;
let hCar = 50;

function showCar()
{
  for (let i = 0; i < imageCars.length; i += 1) 
  {
    image(imageCars[i], xCars[i], yCars[i], wCar, hCar);
  }
}


function moveCar() 
{
  for (let i = 0; i < imageCars.length; i += 1)
  {
    xCars[i] += speedCars[i];
  }
}


function backPositionInitialCar() 
{
  for (let i = 0; i < imageCars.length; i += 1)
  {
    if (passedTheWholeScreen(xCars[i])) 
    {
      xCars[i] = -100;
    }
  }
}

function passedTheWholeScreen(xCar) 
{
  return xCar > 850;
}
