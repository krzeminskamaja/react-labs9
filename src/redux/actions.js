import { EMPLOYEES_LOADED } from './constants';
import { EMPLOYEE_ADDED } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export const newEmployeeAdded = (newEmployee) => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      newEmployee
    }
  };
};