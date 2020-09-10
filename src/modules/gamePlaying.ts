import { take, fork, cancel, delay } from 'redux-saga/effects';
import { gameModule } from './gameCore';

export function* rootSaga() {
    const { playStart, playEnd } = gameModule.actions;
    while (yield take(playStart.type)) {
        const playingTask = yield fork(playGame);
        yield take(playEnd.type);
        yield cancel(playingTask);
    }
}

function* playGame() {
    while (true) {
        yield console.log('るーぷなう');
        yield delay(1000);
    }
}
