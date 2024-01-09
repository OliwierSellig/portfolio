import { ReactNode, createContext, useContext } from "react";
import { useProjects } from "../hooks/useProjects";
import { useTechnologies } from "../hooks/useTechnologies";
import { useContacts } from "../hooks/useContacts";
import { ContactItem, ProjectItem, TechnologyItem } from "../lib/types";

const DataContext = createContext<ContextType | undefined>(undefined);

interface ContextType {
  projects: ProjectItem[] | undefined | null;
  sortProjects: () => ProjectItem[] | null;
  filterProjects: (list: string[]) => ProjectItem[];
  contacts: ContactItem[] | undefined | null;
  filterContacts: (list: string[]) => ContactItem[];
  technologies: TechnologyItem[] | undefined | null;
  filterTechnologies: (list: string[]) => TechnologyItem[];
  readyToShow: boolean;
}

function DataProvider({ children }: { children: ReactNode }) {
  const { isLoading: loadingProjects, projects } = useProjects();
  const { isLoading: loadingTechnologies, technologies } = useTechnologies();
  const { isLoading: loadingContacts, contacts } = useContacts();

  const lodadedData =
    !loadingContacts && !loadingProjects && !loadingTechnologies;

  const dataExist = projects && technologies && contacts;

  const readyToShow = Boolean(lodadedData && dataExist);

  function sortProjects() {
    if (!projects) return null;

    return projects.sort((a, b) => a.sortID - b.sortID);
  }

  function filterProjects(list: string[]) {
    if (!dataExist) return [];

    return projects.filter((project) => list.includes(project.slug));
  }

  function filterTechnologies(list: string[]) {
    if (!dataExist) return [];

    return technologies.filter((tech) => list.includes(tech.slug));
  }

  function filterContacts(list: string[]) {
    if (!dataExist) return [];

    return contacts.filter((contact) => list.includes(contact.slug));
  }

  return (
    <DataContext.Provider
      value={{
        projects,
        sortProjects,
        filterProjects,
        contacts,
        filterContacts,
        technologies,
        filterTechnologies,
        readyToShow,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const value = useContext(DataContext);
  if (value === undefined)
    throw new Error("Data context was used outside of a provider");

  return value;
}

export { DataProvider, useData };
