() => {
  const [selected, setSelected] = React.useState({
    value: 0,
    label: 'A thing',
    note: 'with a note',
  });

  return (
    <Select
      size="md"
      placeholder="placeholder"
      dropdownRight="xs"
      dropdownWidth="lg"
      inverse={false}
      block
      selected={selected}
      disabled={false}
      onChange={v => setSelected(v)}
      required={false}
      searchPlaceholder="searchplaceholder"
      dropdownUp={false}
      /**
       * Search Parameter:
       *
       * if `true` default search functionality being enabled
       * (not case sensitive search in option labels & currency props)
       *
       * if `function` you can define your own search function
       * to implement custom search experience.
       * This search function used while filtering the options array.
       * The custom search function takes two parameters.
       * First is the option the second is the keyword.
       */
      search={true}
      options={[
        { header: 'Basic' },
        { value: 0, label: 'A thing', note: 'with a note' },
        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
        { value: 2, label: 'A disabled thing', disabled: true },
        { header: 'Icons' },
        { value: 3, label: 'Profile', icon: 'icon-profile' },
        { value: 4, label: 'Globe', icon: 'icon-globe' },
        { header: 'Currencies' },
        { value: 5, label: 'British Pound', currency: 'gbp' },
        { value: 6, label: 'Euro', currency: 'eur' },
        { separator: true },
        { value: 7, label: 'Something else' },
      ]}
    />
  );
};
