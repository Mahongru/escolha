import { combineReducers } from 'redux';
import * as Cellreducers from './reducers/cell'

// define reducer functions.
function userCases(state = [], action) {
  switch(action.type) {
    case 'USER_CASES':
      return action.data.cases;
      break;
    default:
      return state
  }
}

function casesReducer(state = [], action) {
  switch(action.type) {
    case 'DATA_LOADED':
      return action.data.cases;
      break;
    default:
      return state
  }
}
function objectivesReducer(state = [], action) {
  switch(action.type) {
    case 'DATA_LOADED':
      return action.data.objectives;
      break;
    default:
      return state
  }
}
function alternativesReducer(state = [], action) {
  switch(action.type) {
    case 'DATA_LOADED':
      return action.data.alternatives;
      break;
    default:
      return state
  }
}
function cellsReducer(state = [], action) {
  switch(action.type) {
    case 'DATA_LOADED':
      return action.data.cells
      break;
    case 'CELL_SAVE':
      // update the cell
      var cellToUpdateIndex;
      state.forEach((cell, index) => {
        if(cell.alternative_id === action.cell.alternative_id &&
        cell.objective_id === action.cell.objective_id) {
          cellToUpdateIndex =  index;
        }
      })
      const newCell = {...state[cellToUpdateIndex], value: action.value}
      return [
        ...state.slice(0, cellToUpdateIndex),
        newCell,
        ...state.slice(cellToUpdateIndex + 1)
      ]
      break;
    default:
      return state
  }
}

function uiStateReducer(state = {}, action) {
  switch(action.type) {
    // case 'AlternativesSelected':
    case 'DATA_LOADED':
      return action.data.uistate;
      break;
    case 'AlternativesSelected':
      return action.uistate; // How to set state from a reducer?
      break;
    case 'saveSelectedVal':
      return action.value;
      break;
    case 'UPDATE_UI':
      return Object.assign({}, state, action.data);
      break;
    // case 'OBJECTIVE_DRAGSTART':
    //   return Object.assign({}, state, action.data);
    // case 'OBJECTIVE_DRAGEND':
    //   return Object.assign({}, state, action.data);
    // case 'OBJECTIVE_DRAGGING':
    //   return Object.assign({}, state, action.data);
    default:
      return state
  }
}



// the keys are the names of the store property
const rootReducer = combineReducers({
  // users: usersReducer,
  userCases: userCases,
  cases: casesReducer,
  objectives: objectivesReducer,
  alternatives: alternativesReducer,
  cells: cellsReducer,
  uistate: uiStateReducer,

  cellBeingEdited: Cellreducers.cellReducer
});



export default rootReducer;