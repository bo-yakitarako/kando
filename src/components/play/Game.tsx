import React from 'react';
import styled from 'styled-components';
import { Player } from './Player';
import { TouchPad } from './TouchPad';

export const Game = () => {
    return (
        <Wrapper>
            <Player />
            <TouchPad />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
`;
