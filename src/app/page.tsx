import {
  getAllCharactersPages,
  getAllPlanets,
  getAllSpecies,
} from '@/common/swapi-services';
import { extractIdFromUrl } from '@/common/utils';
import ListCharacters from '@/components/ListCharacters';
import SearchNav from '@/components/SearchNav';
import FilterNav from '@/components/FilterNav';
import { TSpecies } from '@/common/types';

export default async function Page() {
  const listAllCharactersRes = await getAllCharactersPages();
  const listAllCharacters = listAllCharactersRes.flatMap((c) => c.results);

  const listAllPlanets = await getAllPlanets();
  const listAllSpecies = await getAllSpecies();

  return (
    <main className='flex flex-col'>
      <div className='p-6 pb-4'>
        <SearchNav placeholder='Search Star Wars Heroes...' className='mb-4' />
        <div className='flex gap-2'>
          <div className='font-[600]'>Filter:</div>
          <FilterNav
            name='species'
            placeholder='--All Species--'
            items={listAllSpecies.map((item) => ({
              value: extractIdFromUrl(item.url) || '',
              label: item.name,
            }))}
          />
          <FilterNav
            name='planets'
            placeholder='--All Planet--'
            items={listAllPlanets.map((item) => ({
              value: extractIdFromUrl(item.url) || '',
              label: item.name,
            }))}
          />
        </div>
      </div>

      <ListCharacters
        items={listAllCharacters.map((item, index) => {
          const characterID = extractIdFromUrl(item.url);
          const foundSpecies = listAllSpecies?.find(
            (s) => s.url === item.species[0]
          );
          const foundPlanet = listAllPlanets?.find(
            (p) => p.url === item.homeworld
          );
          const speciesSkinColors =
            foundSpecies && foundSpecies.skin_colors !== 'n/a'
              ? foundSpecies.skin_colors
              : undefined;

          return {
            ...item,
            id: characterID,
            skin_colors: speciesSkinColors,
            homeworld_name: foundPlanet?.name,
          };
        })}
      />
    </main>
  );
}
