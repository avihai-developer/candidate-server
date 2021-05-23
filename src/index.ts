import * as http from 'http';
import { App } from "./app";
import { APP_SETTINGS } from "./consts/app-settings.const";

const app: App = new App();
app.init().then(() => {
	http.createServer(app.express).listen(APP_SETTINGS.PORT, () => {
		console.log(`${APP_SETTINGS.NAME} express server listening on port ${APP_SETTINGS.PORT}`);
		console.log(`http://localhost:${APP_SETTINGS.PORT}`);
	});
})
