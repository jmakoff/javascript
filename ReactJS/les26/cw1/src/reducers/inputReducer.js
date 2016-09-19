const inputReducer = (state = '', action) => {

    switch (action.type) {
        case 'CHANGE_TEXT': {
            return action.payload;
            break;
        }
        default: {
            return state;
        }
    }
};

export default inputReducer;