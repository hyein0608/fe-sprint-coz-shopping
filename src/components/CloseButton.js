import styled from 'styled-components';
import Close from '../assets/Vector.png';

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const CloseButton = ({ setShow }) => {
  return (
    <CloseContainer>
      <img
        src={Close}
        alt="img"
        onClick={() => {
          setShow(false);
        }}
      />
    </CloseContainer>
  );
};

export default CloseButton;