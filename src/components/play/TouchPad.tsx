import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { gameModule } from 'modules/gameCore';

export const TouchPad = () => {
    const dispatch = useDispatch();
    const { moveLeft, moveRight, stopPlayer } = gameModule.actions;
    return (
        <Wrapper>
            <Controller
                onMouseDown={() => dispatch(moveLeft())}
                onMouseUp={() => dispatch(stopPlayer())}
            />
            <Controller
                onMouseDown={() => dispatch(moveRight())}
                onMouseUp={() => dispatch(stopPlayer())}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 10;
`;

const Controller = styled.div`
    width: 50%;
    height: 100%;
`;
