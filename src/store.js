import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mainReducer from "./reducers/index";

import { mainSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga);

export default store;
