const initialData = [];

const addToCart = (state = initialData, action)=>{
    switch(action.type) {
        case "addData" :
            console.log(action.data);
            return [...state, action.data]

        default :
            return state;
    }
}

export default addToCart;