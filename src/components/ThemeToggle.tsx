// src/components/ThemeToggle.tsx
import styled from 'styled-components';
import useThemeStore from '../store/useThemeStore';

export default function ThemeToggle() {
  const { toggleTheme, isDarkMode } = useThemeStore();

  return (
    <ToggleContainer>
      <button onClick={toggleTheme}>
        {isDarkMode ? '🌙 다크모드' : '☀️ 라이트모드'}
      </button>
    </ToggleContainer>
  );
}

const ToggleContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;

  button {
    background-color: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-size: 0.875rem;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
