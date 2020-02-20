export default function handleSearch(
  event,
  data,
  defaultResults,
  setSearchResults,
  setNoResults,
  fieldsToSearch
) {
  const charEntered = event.key.length === 1 ? event.key : '';
  let query = event.target.value + charEntered;

  if (event.key === 'Backspace') {
    query = query.slice(0, -1);
  }

  if (query.length < 3) {
    setSearchResults(defaultResults);
    setNoResults(false);
    return;
  }
  query = query.toLowerCase();
  const results = data.filter((item) => {
    let result = false;
    fieldsToSearch.forEach((field) => {
      result = item[field].toLowerCase().includes(query) ? true : result;
    });
    return result;
  });

  if (results.length > 0) {
    setSearchResults(results);
    setNoResults(false);
  } else {
    setNoResults(true);
  }
}
