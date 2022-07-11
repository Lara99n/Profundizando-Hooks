const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

//la accion es lo que el dice al reducer como quiero cambiar el state.
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodos = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

//si quiero hacer una modificar al reducer le tengo q mandar una accion que le va a decir como modificarse.
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodos,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
