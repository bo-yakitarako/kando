import { take, fork, cancel, select, put, delay } from 'redux-saga/effects';
import { gameModule, IAppState } from './gameCore';
import { domSize } from './utility';

export function* rootSaga() {
    const { playStart, playEnd } = gameModule.actions;
    while (yield take(playStart.type)) {
        const playingTask = yield fork(playGame);
        yield take(playEnd.type);
        yield cancel(playingTask);
    }
}

let frameCount = 0;
let firstTime = Date.now();
function* playGame() {
    const { moveLocation } = gameModule.actions;
    const limitX = window.innerWidth - domSize.width;
    while (true) {
        const { left, right, playerX } = yield select(
            ({ moving: { left, right }, playerX }: IAppState) => ({
                left,
                right,
                playerX,
            })
        );
        let duration = 0;
        if (left) {
            duration -= 15;
        }
        if (right) {
            duration += 15;
        }
        const nextX = playerX + duration;
        yield put(moveLocation(nextX < 0 ? 0 : nextX > limitX ? limitX : nextX));
        const currentTime = yield Date.now();
        if (currentTime - firstTime > 1000) {
            firstTime = currentTime;
            frameCount = 0;
        }
        console.log(1000 * ++frameCount / (currentTime - firstTime));
        yield delay(1000 / 60);
    }
}
