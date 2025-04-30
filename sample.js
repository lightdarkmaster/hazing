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
