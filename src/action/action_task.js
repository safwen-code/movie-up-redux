import { ADD_Task, DELET_Task, Edite_Task } from "./action_type";
export const Add_task = payload => ({
  type: ADD_Task,
  payload
});
export const Dele_task = payload => ({
  type: DELET_Task,
  payload
});
export const Edite_task = payload => ({
  type: Edite_Task,
  payload
});
