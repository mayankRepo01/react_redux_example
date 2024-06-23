import userSaga from "./sagas.js";
import { all } from "redux-saga/effects";

function* rootSaga() {
    yield all([
        userSaga()
    ])
}

export default rootSaga;