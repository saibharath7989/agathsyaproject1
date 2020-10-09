import { BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

export function createTimeTrackerWindow(timeTrackerWindow) {
	const mainWindowSettings: Electron.BrowserWindowConstructorOptions = windowSetting();

	timeTrackerWindow = new BrowserWindow(mainWindowSettings);

	const launchPath = url.format({
		pathname: path.join(__dirname, '../ui/index.html'),
		protocol: 'file:',
		slashes: true,
		hash: '/time-tracker'
	});

	timeTrackerWindow.loadURL(launchPath);

	timeTrackerWindow.hide();

	return timeTrackerWindow;
}

const windowSetting = () => {
	const mainWindowSettings: Electron.BrowserWindowConstructorOptions = {
		frame: true,
		resizable: true,
		focusable: true,
		fullscreenable: true,
		webPreferences: {
			nodeIntegration: true,
			webSecurity: false
		},
		width: 900,
		height: 600,
		title: 'Time Tracker'
	};

	return mainWindowSettings;
};
