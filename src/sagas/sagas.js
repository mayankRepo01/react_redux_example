import { call,put,takeEvery } from "redux-saga/effects";
import {fetchUserData, fetchUserDataSuccess} from "../actions/Actions.js";


const fetchUsers=()=>{
    console.log("fetchUsers")
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(data=> data)
    .catch(error=> error)
}
function* fetchUserDataWorker() {
    const users= yield call(fetchUsers);
    yield put(fetchUserDataSuccess(users))
}

function* userSaga(){

    yield takeEvery(fetchUserData().type, fetchUserDataWorker)
}



export default userSaga;