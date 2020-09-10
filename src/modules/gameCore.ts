import { createSlice, configureStore, getDefaultMiddleware, PayloadAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './gamePlaying';
import { domSize } from './utility';

export interface IAppState {
    playerX: number;
    turnLeft: boolean;
    moving: {
        left: boolean;
        right: boolean;
    }
}

const initialState: IAppState = {
    playerX: (window.innerWidth - domSize.width) / 2,
    turnLeft: true,
    moving: {
        left: false,
        right: false,
    },
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
        moveLocation: (state, { payload }: PayloadAction<number>) => {
            state.playerX = payload;
        },
        moveLeft: (state) => {
            state.moving.left = true;
            state.turnLeft = true;
        },
        moveRight: (state) => {
            state.moving.right = true;
            state.turnLeft = false;
        },
        stopPlayer: (state) => {
            state.moving = { left: false, right: false };
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
