import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gameModule } from 'modules/gameCore';
import { Game } from './play/Game';

export const App = () => {
    const { playStart, playEnd } = gameModule.actions;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(playStart());
        // setTimeout(() => {
        //     dispatch(playEnd());
        // }, 10000);
    }, [dispatch, playStart, playEnd]);

    return (
        <React.Fragment>
            <Game />
        </React.Fragment>
    );
};
