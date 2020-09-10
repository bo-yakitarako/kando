import { createSlice, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './gamePlaying';

export interface IAppState {

}

const initialState: IAppState = {

};

export const gameModule = createSlice({
    name: 'kando',
    initialState,
    reducers: {
        playStart: () => {
            console.log('てすたぴーや');
        },
        playEnd: () => {
            console.log('おわりんご');
        },
    },
});

const sagaMiddleware = createSagaMiddleware();
const setupStore = () => {
    const middlewares = [...getDefaultMiddleware(), sagaMiddleware];
    return configureStore({
        middleware: middlewares,
        reducer: gameModule.reducer,
    });
};
export const store = setupStore();
sagaMiddleware.run(rootSaga);
