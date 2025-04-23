import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div` 
  min-height: 100vh;
`;

const Main = styled.main`    
  margin: 0 auto;
  padding: 40px 20px;
`;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}
