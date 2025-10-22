const getDate = () => new Date().toISOString().slice(0, 10);

console.log(getDate());