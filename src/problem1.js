function multipleOf3And5(number) {
  const multiples = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  const sum = multiples.reduce((acc, current) => acc + current);
  return sum;
}

multipleOf3And5(49);
