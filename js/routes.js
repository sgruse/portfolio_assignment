page('/', workControllers.index);

page('/project', projectControllers.index, objectControllers.showProjects, objectControllers.createProjects);

page('/about', aboutControllers.index);

page();
