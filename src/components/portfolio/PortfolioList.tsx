import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchProjects } from '../../lib/fetchProjects';
import { Project } from '@/types/project';
import PortfolioModal from './PortfolioModal';

const ListWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

const PortfolioList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    load();
  }, []);

  return (
    <>
      <ListWrapper>
        {projects.map((project) => (
          <Card key={project.id} onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Card>
        ))}
      </ListWrapper>

      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default PortfolioList;
