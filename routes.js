import index from "./routes/index";
import users from "./routes/users";

export default function (app) {
	app.use('/', index);
	app.use('/users', users);
};
