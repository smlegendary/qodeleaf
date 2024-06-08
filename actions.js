import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actionTypes';

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});
