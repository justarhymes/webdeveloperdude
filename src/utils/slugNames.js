const slugName = (name) => {
  name = name.replace(/_/g, '-');
	name = name.replace(/--/g, '-');

	var list = [];
	name.split('-').forEach(function (slug) {
		list.push(slug.substr(0, 1).toUpperCase() + slug.substr(1));
	});
	return list.join(' ');
}

export default slugName;
