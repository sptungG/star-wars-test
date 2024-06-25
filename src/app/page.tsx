import { getAllCharactersPages, getAllPlanets, getAllSpecies } from '@/common/swapi-services';
import { extractIdFromUrl } from '@/common/utils';
import ListCharacters from '@/components/ListCharacters';
import SearchNav from '@/components/SearchNav';

export default async function Page() {
  const listAllCharactersRes = await getAllCharactersPages();
  const listAllCharacters = listAllCharactersRes.flatMap((c) => c.results);

  const listAllPlanets = await getAllPlanets();
  const listAllSpecies = await getAllSpecies();

  return (
    <main className="flex flex-col">
      <div className="p-6">
        <SearchNav placeholder="Search Star Wars Heroes..." />
      </div>

      <ListCharacters
        items={listAllCharacters.map((item, index) => {
          const characterID = extractIdFromUrl(item.url);
          const foundSpecies = listAllSpecies?.find(
            (s) => s.url === item.species[0] && s.skin_colors !== 'n/a'
          );
          const foundPlanet = listAllPlanets?.find((p) => p.url === item.homeworld);

          return {
            ...item,
            id: characterID,
            skin_colors: foundSpecies?.skin_colors,
            homeworldName: foundPlanet?.name,
          };
        })}
      />
    </main>
  );
}
