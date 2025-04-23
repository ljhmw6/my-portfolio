import projects from '../data/projects.json';
import { Project } from '@/types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 500); // 0.5초 후에 데이터 반환 (비동기처럼 흉내)
  });
};
