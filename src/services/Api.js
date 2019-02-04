import axios from "axios";

const query = searchTerm => {
  return axios
    .get(
      "https://www.headlightlabs.com/api/assessment_search_wrapper?query=" +
        encodeURIComponent(searchTerm)
    )
    .then(({ data: { itemListElement } }) => {
      return itemListElement.map(e => {
        const { result } = e;
        const { name, description, image } = result;

        return {
          id: result["@id"],
          name,
          description,
          imageUrl: image ? image.contentUrl : null,
        };
      });
    });
};

export default {
  query,
};
