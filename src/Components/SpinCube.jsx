import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaJsSquare, FaWordpress, FaBootstrap, FaCss3, FaHtml5 } from 'react-icons/fa';


const rotateAnimation = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const CubeContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 800px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: ${rotateAnimation} 10s infinite linear;
`;

const CubeFace = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border: 2px solid black;
`;

const FrontFace = styled(CubeFace)`
  transform: translateZ(100px);
`;

const BackFace = styled(CubeFace)`
  transform: translateZ(-100px) rotateY(180deg);
`;

const RightFace = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(100px);
`;

const LeftFace = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(100px);
`;

const TopFace = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(100px);
`;

const BottomFace = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(100px);
`;

const CubeViewer = () => {
  return (
    <CubeContainer>
      <Cube>
        <FrontFace color="red">
          <FaReact size={64} />
        </FrontFace>
        <BackFace color="blue">
          <FaJsSquare size={64} />
        </BackFace>
        <RightFace color="green">
          <FaWordpress size={64} />
        </RightFace>
        <LeftFace color="yellow">
          <FaBootstrap size={64} />
        </LeftFace>
        <TopFace color="orange">
          <FaCss3 size={64} />
        </TopFace>
        <BottomFace color="purple">
          <FaHtml5 size={64} />
        </BottomFace>
      </Cube>
    </CubeContainer>
  );
};

export default CubeViewer;