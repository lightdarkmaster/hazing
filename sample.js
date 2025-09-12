//Pag square na dire nag mumultiply or nagamit hin library...

const square = (num) => {
    if (num === 0) return 0;
  
    let result = 0;
    let positiveNum = num;
  
    if (num < 0) {
      positiveNum = -num;
    }
  
    for (let i = 0; i < positiveNum; i++) {
      result = result + positiveNum;
    }
  
    return result;
  };
  
  console.log(square(15));
  

const square1 = (num) => {
    let positiveNum = num < 0 ? -num : num;
    let result = 0;
    
    for (let i = 0; i < positiveNum; i++) {
      result += positiveNum;
    }
  
    return result;
  };
  
  console.log(square1(5));

  const anotherFunction =(num)=>{
    return num * num;
  }
  
  console.log(anotherFunction(9));

  const sol =(element)=>{
    return Math.pow(element, 3);
  }

console.log(sol(3));

const multiply =(num)=>{
  result = num * num;
  return result;
}

console.log(multiply(3));


const multiply1 =(num)=>{
  return num * num;
}

console.clear();
console.log(multiply1(3));

const createRecord = (name, age, occupation) => {
    return {
      name,
      age,
      occupation
    };
  };

  console.log(createRecord("Chan", 22, "Programmer"));

  const createRecord1 = (name, age, occupation) => ({
    name,
    age,
    occupation
  });
  
  console.log(createRecord1("Chan", 22, "Programmer"));
