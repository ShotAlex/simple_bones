const boneOne = document.querySelector('.bone-1')
const boneTwo = document.querySelector('.bone-2')
const btn = document.querySelector('.button')

const getRandom = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

const setNumbers = (numOne, numTwo) => {
  boneOne.textContent = numOne
  boneTwo.textContent = numTwo
}

btn.addEventListener('click', () => {
  const numOne = getRandom(1, 6)
  const numTwo = getRandom(1, 6)
  setNumbers(numOne, numTwo)
})


