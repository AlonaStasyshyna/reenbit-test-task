export const charactersMapper = characters =>
  characters
    .map(({ id, name, species, image }) => ({
      id,
      name,
      species,
      image,
    }))
    .sort((firstCharacter, secondCharacter) =>
      firstCharacter.name.localeCompare(secondCharacter.name)
    )
    .slice(0, 8);
