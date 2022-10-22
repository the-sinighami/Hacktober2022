const initialState = [
    {
       id:0,
       name: "rajat sharma",
       number: 1234567890,
       email:"rs@gmail.com",
    },
    {
        id:1,
        name: "test name",
        number: 3647362782,
        email:"test@test.com",
    },
];

const contactReducer = (state = initialState , action) => {
    switch(action.type){
        case "ADD CONTACT":
            state = [...state, action.payload]
            return state;
            case "UPDATE_CONTACT":
                const updateState = state.map(contact=> 
                    contact.id === action.payload.id? action.payload:contact);
           state = updateState;
           return state;
           case "DELETE_CONTACT":
            const filterContacts = state.filter(contact=>contact.id !== action.payload ? contact : null);
            state = filterContacts;
            return state;
        default:
            return state;
    }
};

export default contactReducer;