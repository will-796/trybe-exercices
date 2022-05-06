const fatorial = n => n ? fatorial(n - 1) * n : 1;

console.log(fatorial(4));
