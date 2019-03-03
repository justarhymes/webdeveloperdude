const slugName = (name) => {
  name = name.replace(/_/g, '-');
	name = name.replace(/--/g, '-');

	var list = [];
	name.split('-').forEach(function (slug) {
		list.push(slug.substr(0, 1).toUpperCase() + slug.substr(1));
	});
  const listJoin = list.join(' ');
  switch (listJoin) {
    case 'Front End Development':
      return 'Front-End Development';
    case 'Back End Development':
      return 'Back-End Development';
    case 'Uiux Design':
      return 'UI/UX Design';
    case 'Html':
      return 'HTML';
    case 'Css':
      return 'CSS';
    case 'Sass':
      return 'SASS';
    case 'Npm':
      return 'npm';
    case 'Javascript':
      return 'JavaScript';
    case 'Wordpress':
      return 'WordPress';
    default:
      return listJoin
  }
}

export default slugName;
