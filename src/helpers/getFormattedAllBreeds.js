export const getFormattedAllBreeds = (data) => {
  const breedsWithSubBreed = Object.entries(data).map((breed) => {
    if (breed[1].length) {
      return breed[1].map((subBreed) => {
        return {
          label:
            breed[0].charAt(0).toUpperCase() +
            breed[0].slice(1) +
            " " +
            subBreed,
          value: breed[0] + "-" + subBreed,
        };
      });
    } else {
      return {
        label: breed[0].charAt(0).toUpperCase() + breed[0].slice(1),
        value: breed[0],
      };
    }
  });

  return breedsWithSubBreed.reduce((formattedBreeds, breed) => {
    if (Array.isArray(breed)) {
      return [...formattedBreeds, ...breed];
    } else {
      return [...formattedBreeds, breed];
    }
  }, []);
};
