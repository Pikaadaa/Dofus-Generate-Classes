import { useQuery } from '@tanstack/react-query'


async function fetchData() {
    const result = await fetch(`https://fr.dofus.dofapi.fr/classes`);
    const json = await result.json();
    return json;
}

export function useDofus() {
    const { data, isError, isLoading } = useQuery(["classes"], fetchData);

    return {
        data, isError, isLoading
    }
}