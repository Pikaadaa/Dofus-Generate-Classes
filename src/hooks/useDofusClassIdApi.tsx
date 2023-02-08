import { useQuery } from '@tanstack/react-query'


async function fetchDataById(id: number) {
    const result = await fetch(`https://fr.dofus.dofapi.fr/classes/${id}`);
    const json = await result.json();
    return json;
}

const fetchDataByIdQuery = (id: number) => () => fetchDataById(id);


export function useClasseId(id: number) {
    return useQuery(["classesId"], fetchDataByIdQuery(id));
}