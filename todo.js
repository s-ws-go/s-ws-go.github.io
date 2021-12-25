const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

function filterFn(toDo) {
  return toDo.id === 1;
} // id가 true인 아이템들만 가지고 반환함.

let toDos = []; // 22열에서 cleanToDos로 재정의하니까 const가 아닌 let으로 표기

function deleteToDO(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); //string을 숫자로 바꿔줌
  });
  toDos = cleanToDos;
  saveToDos(); // toDos를 cleanToDos로 치환 후 저장
}

//dir로 parentnod 찾기

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement('li'); //기존꺼 끌고 오는게 아니라 새로운 인자 생성시
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  delBtn.innerText = '❌';
  delBtn.classList.add('todoBtn');
  delBtn.addEventListener('click', deleteToDO);
  span.innerText = text;
  li.appendChild(delBtn); //li 안에 span하고 버튼을 넣음
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId, //newId
  };
  toDos.push(toDoObj); // push를 써서 toDos array 안에 todoobj를 넣어줌
  saveToDos(); //toDos 안에 집어 넣은다음에 불러야됨 -> 순서가 맨 뒤임.
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function something(toDo) {
  paintToDo(toDo.text);
}

function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(something);
  }
  //string을 object로 다시 돌려주는 작업임
  /*parsedToDos.forEach(function(toDo) {
     paintToDo(toDo.text); }; */
}

function init() {
  loadTodos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();

// 자바스크립트는 local storage의 모든 데이터를 string으로 저장하려 함
// 개발자 도구 apllication에 들어간 key - value 값도 모두 텍스트임
// JSON.stringify 사용 : 자바스크립트 object를 string으로 바꿔줌
// for each() : ()안의 function을 번갈아 사용
// function something()
/* {} for each(something) 와 같은식으로도 사용 가능 */
