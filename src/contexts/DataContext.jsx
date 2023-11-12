import { createContext, useContext } from "react";
import { useProjects } from "../hooks/useProjects";
import { useTechnologies } from "../hooks/useTechnologies";
import { useContacts } from "../hooks/useContacts";

const DataContext = createContext();

function DataProvider({ children }) {
  const { isLoading: loadingProjects, projects } = useProjects();
  const { isLoading: loadingTechnologies, technologies } = useTechnologies();
  const { isLoading: loadingContacts, contacts } = useContacts();

  console.log(projects);

  const lodadedData =
    !loadingContacts && !loadingProjects && !loadingTechnologies;

  const dataExist =
    projects?.length > 0 && technologies?.length > 0 && contacts?.length > 0;

  const readyToShow = lodadedData && dataExist;

  function sortProjects() {
    return projects.sort((a, b) => a.sortID - b.sortID);
  }

  function filterProjects(list = []) {
    if (!dataExist) return;
    if (list.length < 2) {
      const [item] = list;
      return projects.find((project) => project.slug === item);
    } else {
      return projects.filter((project) => list.includes(project.slug));
    }
  }

  function filterTechnologies(list = []) {
    if (!dataExist) return;
    if (list.length < 2) {
      const [item] = list;
      return technologies.find((tech) => tech.slug === item);
    } else {
      return technologies.filter((tech) => list.includes(tech.slug));
    }
  }

  function filterContacts(list = []) {
    if (!dataExist) return;
    if (list.length < 2) {
      const [item] = list;
      return contacts.find((contact) => contact.slug === item);
    } else {
      return contacts.filter((contact) => list.includes(contact.slug));
    }
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
