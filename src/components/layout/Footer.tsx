
import styled from 'styled-components';
 
const FooterContainer = styled.header`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-top: 1px solid #eee;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer> 
        이 포트폴리오는 리액트로 개발되었습니다.
    </FooterContainer>
  );
}
