console.log('Os números primos de 1 a 50  são: ')

for (let num = 2; num <= 50; num++) {
  let ePrimo = true
  let cont = 0

  for (let div = 1; div <= num; div++) {
    if (num % div === 0) {
      cont++
    }
    if (cont > 2) {
      ePrimo = false
      break
    }
  }
  if (ePrimo) {
    console.log(num)
  }
}