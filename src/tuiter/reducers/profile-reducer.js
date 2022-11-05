import profileArray from "../profile/profile.json"

const profileData = (state = profileArray, action) => {

    switch (action.type) {
        case "EditProfile":
            state = [{ ...action.profile }];
            console.log(state);
            return state;
        default:
            return state;
    }
};

export default profileData;