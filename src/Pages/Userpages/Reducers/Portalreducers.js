export const Portalreducers = (state, action) => {
    switch (action.type) {
        case 'HOTELDATA':
        
            return {
                    ...state,
                hotels: action.hotels
            }
            break;
    
        default:
            return state;
            break;
    }
}