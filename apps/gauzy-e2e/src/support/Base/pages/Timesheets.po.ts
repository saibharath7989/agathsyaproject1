import {
	verifyElementIsVisible,
	clickButton,
	clickButtonByIndex,
	clickElementByText,
	clearField,
	enterInput,
	clickKeyboardBtnByKeycode
} from '../utils/util';
import { TimesheetsPage } from '../pageobjects/TimesheetsPageObject';

export const addTimeButtonVisible = () => {
	verifyElementIsVisible(TimesheetsPage.addTimeButtonCss);
};

export const clickAddTimeButton = () => {
	clickButton(TimesheetsPage.addTimeButtonCss);
};

export const selectEmployeeDropdownVisible = () => {
	verifyElementIsVisible(TimesheetsPage.selectEmloyeeCss);
};

export const clickSelectEmployeeDropdown = () => {
	clickButton(TimesheetsPage.selectEmloyeeCss);
};

export const selectEmployeeFromDropdown = (index) => {
	clickButtonByIndex(TimesheetsPage.selectEmployeeDropdownOptionCss, index);
};

export const clickKeyboardButtonByKeyCode = (keycode) => {
	clickKeyboardBtnByKeycode(keycode);
};

export const dateInputVisible = () => {
	verifyElementIsVisible(TimesheetsPage.dateInputCss);
};

export const enterDateData = () => {
	clearField(TimesheetsPage.dateInputCss);
	const date = Cypress.moment().format('MMM D, YYYY');
	enterInput(TimesheetsPage.dateInputCss, date);
};

export const clientDropdownVisible = () => {
	verifyElementIsVisible(TimesheetsPage.clientDropdownCss);
};

export const clickClientDropdown = () => {
	clickButton(TimesheetsPage.clientDropdownCss);
};

export const selectClientFromDropdown = (index) => {
	clickButtonByIndex(TimesheetsPage.dropdownOptionCss, index);
};

export const selectProjectDropdownVisible = () => {
	verifyElementIsVisible(TimesheetsPage.projectDropdownCss);
};

export const clickSelectProjectDropdown = () => {
	clickButton(TimesheetsPage.projectDropdownCss);
};

export const selectProjectFromDropdown = (text) => {
	clickElementByText(TimesheetsPage.dropdownOptionCss, text);
};

export const taskDropdownVisible = () => {
	verifyElementIsVisible(TimesheetsPage.taskDropdownCss);
};

export const clickTaskDropdown = () => {
	clickButton(TimesheetsPage.taskDropdownCss);
};

export const selectTaskFromDropdown = (index) => {
	clickButtonByIndex(TimesheetsPage.dropdownOptionCss, index);
};

export const addTimeLogDescriptionVisible = () => {
	verifyElementIsVisible(TimesheetsPage.descriptionTextareaCss);
};

export const enterTimeLogDescriptionData = (data) => {
	clearField(TimesheetsPage.descriptionTextareaCss);
	enterInput(TimesheetsPage.descriptionTextareaCss, data);
};

export const saveTimeLogButtonVisible = () => {
	verifyElementIsVisible(TimesheetsPage.saveTimeButtonCss);
};

export const clickSaveTimeLogButton = () => {
	clickButton(TimesheetsPage.saveTimeButtonCss);
};

export const closeAddTimeLogPopoverButtonVisible = () => {
	verifyElementIsVisible(TimesheetsPage.closeAddTimeLogPopoverCss);
};

export const clickCloseAddTimeLogPopoverButton = () => {
	clickButton(TimesheetsPage.closeAddTimeLogPopoverCss);
};

export const viewEmployeeTimeLogButtonVisible = () => {
	verifyElementIsVisible(TimesheetsPage.viewEmployeeTimeCss);
};

export const clickViewEmployeeTimeLogButton = () => {
	clickButton(TimesheetsPage.viewEmployeeTimeCss);
};

export const editEmployeeTimeLogButtonVisible = () => {
	verifyElementIsVisible(TimesheetsPage.editEmployeeTimeCss);
};

export const clickEditEmployeeTimeLogButton = () => {
	clickButton(TimesheetsPage.editEmployeeTimeCss);
};

export const deleteEmployeeTimeLogButtonVisible = () => {
	verifyElementIsVisible(TimesheetsPage.deleteEmployeeTimeCss);
};

export const clickDeleteEmployeeTimeLogButton = () => {
	clickButton(TimesheetsPage.deleteEmployeeTimeCss);
};