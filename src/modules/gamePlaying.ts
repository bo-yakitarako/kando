import { take, fork, cancel, delay } from 'redux-saga/effects';
import { gameModule } from './gameCore';

export function* rootSaga() {
    while (yield take(gameModule.actions.playStart.type)) {
        const playingTask = yield fork(playGame);
        yield take(gameModule.actions.playEnd.type);
        yield cancel(playingTask);
    }
}

function* playGame() {
    while (true) {
        yield console.log('るーぷなう');
        yield delay(500);
    }
}
