import { FETCH_USER } from "../actions/types";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;

// the anonymous function export below will throw the warning:
// src\reducers\authReducer.js
//   Line 3:1:  Unexpected default export of anonymous function
//   import/no-anonymous-default-export
// export default function (state = null, action) {
//   switch (action.type) {
//     case FETCH_USER:
//       return action.payload || false;
//     default:
//       return state;
//   }
// }
