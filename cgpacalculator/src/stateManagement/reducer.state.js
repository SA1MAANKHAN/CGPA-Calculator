export const initialState = {
  testMul:undefined,
  name: "",
  gameCode: "",
  rotationDegree: 242,
};

const reducer = (state, action) => {
  console.log(action.payload);

  switch (action.type) {

      case "SET_TEST_STATE":
      return {
        ...state,
        testMul: action.payload,
      };


    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    // cipher wheel
    case "SET_ROTATION_DEGREE":
      return {
        ...state,
        rotationDegree: action.payload,
      };

    // Player sets the game code
    case "SET_GAME_CODE":
      return {
        ...state,
        gameCode: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
