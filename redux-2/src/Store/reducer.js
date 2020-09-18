import * as actionTypes from './actions';
import person from '../components/Person/Person';

const initialState = {
    persons: []
}

const reducer  = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.REMOVE:
            const updatedArray = state.persons.filter((person,index) => person.id !== action.removeId)
            return {
                ...state,
                persons: updatedArray
            }
    }
    
    return state;
}

export default reducer;