import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IAppState } from 'modules/gameCore';

export const Player = () => {
    const { playerX, turnLeft } = useSelector((state: IAppState) => state);
    return (
        <Nenechang
            alt="ネネちゃんすなわち感；；動"
            src="/images/nenechang.png"
            style={{ left: playerX, transform: turnLeft ? 'scaleX(-1)' : 'none' }}
        />
    );
};

const Nenechang = styled.img`
    position: absolute;
    height: 15vh;
    bottom: 0;
    z-index: 1;
`;
