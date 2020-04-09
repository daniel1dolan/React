// let state = {
//   clicks: 0,
//   count: 0
// };

// let newState = {
//   ...state,
//   clicks: state.clicks + 1
// };

// console.log(state);
// console.log(newState);

// let state = {
//   house: {
//     name: "Ravenclaw",
//     points: 17
//   },
//   location: "Houston"
// };

// let newState = {
//   ...state,
//   house: {
//     ...state.house,
//     points: state.house.points + 2
//   }
// };

// let state = {
//   school: {
//     name: "UH",
//     house: {
//       name: "Ravenclaw",
//       points: 17
//     }
//   }
// };

// let newState = {
//   ...state,
//   school: {
//     ...state.school,
//     house: {
//       ...state.school.house,
//       points: state.school.house.points + 2
//     }
//   }
// };

// let state = {
//   houses: {
//     gryffindor: {
//       points: 15
//     },
//     ravenclaw: {
//       points: 12
//     },
//     hufflepuff: {
//       points: 13
//     },
//     slytherin: {
//       points: 14
//     }
//   }
// };

// let dyanamicKey = "gryffindor";

// let newState = {
//   ...state,
//   houses: {
//     ...state.houses,
//     [dyanamicKey]: {
//       ...state.houses[dyanamicKey],
//       points: state.houses[dyanamicKey].points + 3
//     }
//   }
// };

// let state = [1, 2, 3];

// let newState = [0, ...state, 4];

// let state = [
//   {
//     id: 1,
//     email: "jaye@hotmail.com"
//   },
//   {
//     id: 2,
//     email: "meryem@yahoo.com"
//   }
// ];

// let newState = state.map((person, index) => {
//   if (person.id === 2) {
//     return {
//       ...person,
//       email: "meryem2@yahoo.com"
//     };
//   }
//   return person;
// });

// let state = [1, 2, 3, 4, 5, 6];

// let newItem = 4;

// // let newState = [...state];

// // newState.splice(3, 0, newItem);

// let newState = [...state.slice(0, 3), newItem, ...state.slice(3)];

// let state = [1, 2, "X", 4];

// let newState = state.filter(item => {
//   if (item == "X") {
//     return false;
//   }
//   return true;
// });

// console.log(state);
// console.log(newState);
