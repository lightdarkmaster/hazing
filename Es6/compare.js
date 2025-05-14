function preprocessInput(rawInput) {
  console.log("Preprocessing input:", rawInput);
  return rawInput.trim().toLowerCase();
}

function coreAlgorithm(processedInput) {
  console.log("Processing input:", processedInput);
  let result = 0;

  for (let i = 0; i < processedInput.length; i++) {
    result += processedInput.charCodeAt(i);
  }

  return result;
}

function postprocessOutput(result) {
  console.log("Postprocessing result:", result);
  return `Final score: ${result}`;
}

function processComplexAlgorithm(input) {
  const preprocessed = preprocessInput(input);
  const result = coreAlgorithm(preprocessed);
  const finalOutput = postprocessOutput(result);
  return finalOutput;
}

const userInput = " HelloWorld123 ";
console.log(processComplexAlgorithm(userInput));

const defineFunction=(element)=>{
  return element = element * element;
}

console.log(defineFunction(2));
