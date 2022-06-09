export const getHeaderText = (item, params, options) => {
  const type = params.name;
  const headerChoices = {
    cap: item.metadata.general_title || 'Untitled',
    inspire: item.metadata?.authors && item.metadata?.authors[0].full_name,
  };

  return {
    title: headerChoices[type],
    tag: new Date(item.created).toLocaleString('en-GB', options),
  };
};
