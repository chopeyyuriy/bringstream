import { Types } from './actions';

const initialState = {
    channelLanguages: null,
    languagesAll: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CHANNEL_LANGUAGES_SUCCESS:
            return {
                ...state,
                ...{
                    channelLanguages: action.payload
                }
            }
        case Types.GET_LANGUAGES_SUCCESS:
            return {
                ...state,
                ...{
                    languagesAll: action.payload
                }
            }
        default:
            return state;
    }
};

export default reducer;