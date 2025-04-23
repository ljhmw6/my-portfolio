import React from 'react';
import styled from 'styled-components';
import { Project } from '@/types/project';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
`;

const PortfolioModal = ({ project, onClose }: ModalProps) => (
  <Backdrop onClick={onClose}>
    <ModalBox onClick={(e) => e.stopPropagation()}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
      <a href={project.url} target="_blank" rel="noopener noreferrer">사이트 보기</a>
    </ModalBox>
  </Backdrop>
);

export default PortfolioModal;
