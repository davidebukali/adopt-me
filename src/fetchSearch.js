async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!apiRes.ok) {
    throw new Error(`Pet search is not ok ${animal}, ${location} and ${breed}`);
  }

  return apiRes.json();
}

export default fetchSearch;
