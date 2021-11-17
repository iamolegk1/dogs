export const getBreedName = (string) => {
  const indexBreedNameInArray = 4;
  const breedName = string.toString().split("/")[indexBreedNameInArray];

  const formattedBreedName =
    breedName.charAt(0).toUpperCase() + breedName.slice(1);
  const result = formattedBreedName.split("-");

  return result.join(" ");
};
