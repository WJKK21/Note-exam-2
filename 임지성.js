
  let basicData = {
    count: 10,
    min: 1,
    max: 10,
    divideNumber: 5
  }

  exampleOne = (count, min, max) => {
    // 위의 basicData를 참고하여 매개변수를 작성하세요.
    let exampleArr = [];
    for (let i = 0; i<count; i++) {
    let rd = Math.random() * max + min;
    let rdcut = Math.round(rd * 100) / 100
      exampleArr.push(rdcut)
    }

// 매개변수 count는 랜덤함수를 실행하는 횟수를 의미합니다.
// 랜덤함수를 실행하는 횟수만큼 반복문을 실행합니다.
// 랜덤함수가 실행되어 도출된 결과 값을 배열에 추가하고
// 배열을 리턴하는 로직을 작성하세요.
// 실수(float)로 도출된 난수, 소숫점 두자리까지 표현된 값을 배열에 추가합니다.


    return exampleArr;
  }


  function exampleTwo(array, divideNumber) {
    let exampleObject = {
      a: [],
      b: []
    }
    let integer = Math.floor(array)
    if (integer < divideNumber) {
      exampleObject.b.push(integer)
    } else{
      exampleObject.a.push(integer)
    }

// 0번째 매개변수 array는 숫자(실수)로 이루어진 배열입니다.
// 1번째 매개변수는 정수만을 입력하도록 타입을 제어하고,
// 매개변수 divideNumber보다 작은수는 a 배열에, 큰수는 b 배열에 추가하는 로직을 작성하세요.
// divideNumber는 basicData 객체의 divideNumber 속성값을 사용합니다.
    return exampleObject;
  }

  function exampleThree(array) {
    let value = 0;
    for(let i = 0; i<array.length; i++) {
      //document.getElementsByTagName('body').textNode = array[i] 
      value += array[i]
    }
// 매개변수 array의 모든 매개변수를 더하는 로직을 작성하세요.
  // 더한 결과 값을 저장하는 변수입니다.
 return value;
  }

function exampleFour(object) {
  let value = 0;
  if (Array.isArray(object) === true) {
    for (let i = 0; i < object.length; i++) {
      if (typeof object[i] !== 'number') {
        value = false;
        break;
      }
    }
  } else { 
    console.log('error');
    value = false;
  }

  // 매개변수 object의 프로퍼티가 배열인지를 검사한 후,
// 배열의 요소가 모두 숫자형태인지 검사하는 로직을 작성하세요.
  // 지역변수에 검사결과를 boolean 타입으로 할당 후 리턴하세요.
  return value;
}
function exampleFive(objectOne, objectTwo) {
// objectOne 매개변수는 최상단 basicData 객체가 인자로 들어올 것을 가정합니다.
// objectTwo는 exampleTwo 함수의 리턴값이 인자로 들어올 것을 가정합니다.
  let value = 0;
  for (let key in objectOne) {
    value += objectOne[key];
  }

// objectOne, objectTwo 모두 각각 프로퍼티의 값을 더한 뒤,
// 위의 지역변수 value에 총합을 생성하여 리턴하는 로직을 작성하세요.
  for (let key in objectTwo) {
    for (let i = 0; i < objectTwo[key].length; i++) {
      value += objectTwo[key][i];
    }
  }
  
  return value;
}
console.log(exampleFive(basicData, exampleTwo()));

