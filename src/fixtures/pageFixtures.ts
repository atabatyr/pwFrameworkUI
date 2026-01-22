import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CheckboxPage } from '../pages/CheckboxPage';
import { DropdownPage } from '../pages/DropdownPage';
import { BasicAuthPage } from '../pages/BasicAuthPage';
import { AlertsPage } from '../pages/AlertsPage';
import { KeyPressesPage } from '../pages/KeyPressesPage';
import { DragDropPage } from '../pages/DragDropPage';
import { HoversPage } from '../pages/HoversPage';
import { TablePage } from '../pages/TablePage';
import { BrokenImagesPage } from '../pages/BrokenImagesPage';
import { FileUploadPage } from '../pages/FileUploadPage';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';
import { DynamicContentPage } from '../pages/DynamicContentPage';
import { InputsPage } from '../pages/InputsPage';
import { DynamicLoadingPage } from '../pages/DynamicLoadingPage';
import { NotificationPage } from '../pages/NotificationPage';
import { StatusCodesPage } from '../pages/StatusCodesPage';
import { FramesPage } from '../pages/FramesPage';
import { ContextMenuPage } from '../pages/ContextMenuPage';
import { DisappearingElementsPage } from '../pages/DisappearingElementsPage';
import { MultipleWindowsPage } from '../pages/MultipleWindowsPage';
import { ABTestingPage } from '../pages/ABTestingPage';
import { ChallengingDOMPage } from '../pages/ChallengingDOMPage';
import { DigestAuthPage } from '../pages/DigestAuthPage';
import { DynamicControlsPage } from '../pages/DynamicControlsPage';
import { EntryAdPage } from '../pages/EntryAdPage';
import { ExitIntentPage } from '../pages/ExitIntentPage';
import { FileDownloadPage } from '../pages/FileDownloadPage';
import { FloatingMenuPage } from '../pages/FloatingMenuPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { GeolocationPage } from '../pages/GeolocationPage';
import { HorizontalSliderPage } from '../pages/HorizontalSliderPage';
import { InfiniteScrollPage } from '../pages/InfiniteScrollPage';
import { JQueryUIMenusPage } from '../pages/JQueryUIMenusPage';
import { JavaScriptErrorPage } from '../pages/JavaScriptErrorPage';
import { LargeDeepDOMPage } from '../pages/LargeDeepDOMPage';
import { NestedFramesPage } from '../pages/NestedFramesPage';
import { RedirectLinkPage } from '../pages/RedirectLinkPage';
import { SecureFileDownloadPage } from '../pages/SecureFileDownloadPage';
import { ShadowDOMPage } from '../pages/ShadowDOMPage';
import { ShiftingContentPage } from '../pages/ShiftingContentPage';
import { SlowResourcesPage } from '../pages/SlowResourcesPage';
import { TyposPage } from '../pages/TyposPage';
import { WYSIWYGEditorPage } from '../pages/WYSIWYGEditorPage';

type TestFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  checkboxPage: CheckboxPage;
  dropdownPage: DropdownPage;
  basicAuthPage: BasicAuthPage;
  alertsPage: AlertsPage;
  keyPressesPage: KeyPressesPage;
  dragDropPage: DragDropPage;
  hoversPage: HoversPage;
  tablePage: TablePage;
  brokenImagesPage: BrokenImagesPage;
  fileUploadPage: FileUploadPage;
  addRemoveElementsPage: AddRemoveElementsPage;
  dynamicContentPage: DynamicContentPage;
  inputsPage: InputsPage;
  dynamicLoadingPage: DynamicLoadingPage;
  notificationPage: NotificationPage;
  statusCodesPage: StatusCodesPage;
  framesPage: FramesPage;
  contextMenuPage: ContextMenuPage;
  disappearingElementsPage: DisappearingElementsPage;
  multipleWindowsPage: MultipleWindowsPage;
  abTestingPage: ABTestingPage;
  challengingDOMPage: ChallengingDOMPage;
  digestAuthPage: DigestAuthPage;
  dynamicControlsPage: DynamicControlsPage;
  entryAdPage: EntryAdPage;
  exitIntentPage: ExitIntentPage;
  fileDownloadPage: FileDownloadPage;
  floatingMenuPage: FloatingMenuPage;
  forgotPasswordPage: ForgotPasswordPage;
  geolocationPage: GeolocationPage;
  horizontalSliderPage: HorizontalSliderPage;
  infiniteScrollPage: InfiniteScrollPage;
  jQueryUIMenusPage: JQueryUIMenusPage;
  javaScriptErrorPage: JavaScriptErrorPage;
  largeDeepDOMPage: LargeDeepDOMPage;
  nestedFramesPage: NestedFramesPage;
  redirectLinkPage: RedirectLinkPage;
  secureFileDownloadPage: SecureFileDownloadPage;
  shadowDOMPage: ShadowDOMPage;
  shiftingContentPage: ShiftingContentPage;
  slowResourcesPage: SlowResourcesPage;
  typosPage: TyposPage;
  wysiwygEditorPage: WYSIWYGEditorPage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  checkboxPage: async ({ page }, use) => {
    const checkboxPage = new CheckboxPage(page);
    await use(checkboxPage);
  },

  dropdownPage: async ({ page }, use) => {
    const dropdownPage = new DropdownPage(page);
    await use(dropdownPage);
  },

  basicAuthPage: async ({ page }, use) => {
    const basicAuthPage = new BasicAuthPage(page);
    await use(basicAuthPage);
  },

  alertsPage: async ({ page }, use) => {
    const alertsPage = new AlertsPage(page);
    await use(alertsPage);
  },

  keyPressesPage: async ({ page }, use) => {
    const keyPressesPage = new KeyPressesPage(page);
    await use(keyPressesPage);
  },

  dragDropPage: async ({ page }, use) => {
    const dragDropPage = new DragDropPage(page);
    await use(dragDropPage);
  },

  hoversPage: async ({ page }, use) => {
    const hoversPage = new HoversPage(page);
    await use(hoversPage);
  },

  tablePage: async ({ page }, use) => {
    const tablePage = new TablePage(page);
    await use(tablePage);
  },

  brokenImagesPage: async ({ page }, use) => {
    const brokenImagesPage = new BrokenImagesPage(page);
    await use(brokenImagesPage);
  },

  fileUploadPage: async ({ page }, use) => {
    const fileUploadPage = new FileUploadPage(page);
    await use(fileUploadPage);
  },

  addRemoveElementsPage: async ({ page }, use) => {
    const addRemoveElementsPage = new AddRemoveElementsPage(page);
    await use(addRemoveElementsPage);
  },

  dynamicContentPage: async ({ page }, use) => {
    const dynamicContentPage = new DynamicContentPage(page);
    await use(dynamicContentPage);
  },

  inputsPage: async ({ page }, use) => {
    const inputsPage = new InputsPage(page);
    await use(inputsPage);
  },

  dynamicLoadingPage: async ({ page }, use) => {
    const dynamicLoadingPage = new DynamicLoadingPage(page);
    await use(dynamicLoadingPage);
  },

  notificationPage: async ({ page }, use) => {
    const notificationPage = new NotificationPage(page);
    await use(notificationPage);
  },

  statusCodesPage: async ({ page }, use) => {
    const statusCodesPage = new StatusCodesPage(page);
    await use(statusCodesPage);
  },

  framesPage: async ({ page }, use) => {
    const framesPage = new FramesPage(page);
    await use(framesPage);
  },

  contextMenuPage: async ({ page }, use) => {
    const contextMenuPage = new ContextMenuPage(page);
    await use(contextMenuPage);
  },

  disappearingElementsPage: async ({ page }, use) => {
    const disappearingElementsPage = new DisappearingElementsPage(page);
    await use(disappearingElementsPage);
  },

  multipleWindowsPage: async ({ page }, use) => {
    const multipleWindowsPage = new MultipleWindowsPage(page);
    await use(multipleWindowsPage);
  },

  abTestingPage: async ({ page }, use) => {
    const abTestingPage = new ABTestingPage(page);
    await use(abTestingPage);
  },

  challengingDOMPage: async ({ page }, use) => {
    const challengingDOMPage = new ChallengingDOMPage(page);
    await use(challengingDOMPage);
  },

  digestAuthPage: async ({ page }, use) => {
    const digestAuthPage = new DigestAuthPage(page);
    await use(digestAuthPage);
  },

  dynamicControlsPage: async ({ page }, use) => {
    const dynamicControlsPage = new DynamicControlsPage(page);
    await use(dynamicControlsPage);
  },

  entryAdPage: async ({ page }, use) => {
    const entryAdPage = new EntryAdPage(page);
    await use(entryAdPage);
  },

  exitIntentPage: async ({ page }, use) => {
    const exitIntentPage = new ExitIntentPage(page);
    await use(exitIntentPage);
  },

  fileDownloadPage: async ({ page }, use) => {
    const fileDownloadPage = new FileDownloadPage(page);
    await use(fileDownloadPage);
  },

  floatingMenuPage: async ({ page }, use) => {
    const floatingMenuPage = new FloatingMenuPage(page);
    await use(floatingMenuPage);
  },

  forgotPasswordPage: async ({ page }, use) => {
    const forgotPasswordPage = new ForgotPasswordPage(page);
    await use(forgotPasswordPage);
  },

  geolocationPage: async ({ page }, use) => {
    const geolocationPage = new GeolocationPage(page);
    await use(geolocationPage);
  },

  horizontalSliderPage: async ({ page }, use) => {
    const horizontalSliderPage = new HorizontalSliderPage(page);
    await use(horizontalSliderPage);
  },

  infiniteScrollPage: async ({ page }, use) => {
    const infiniteScrollPage = new InfiniteScrollPage(page);
    await use(infiniteScrollPage);
  },

  jQueryUIMenusPage: async ({ page }, use) => {
    const jQueryUIMenusPage = new JQueryUIMenusPage(page);
    await use(jQueryUIMenusPage);
  },

  javaScriptErrorPage: async ({ page }, use) => {
    const javaScriptErrorPage = new JavaScriptErrorPage(page);
    await use(javaScriptErrorPage);
  },

  largeDeepDOMPage: async ({ page }, use) => {
    const largeDeepDOMPage = new LargeDeepDOMPage(page);
    await use(largeDeepDOMPage);
  },

  nestedFramesPage: async ({ page }, use) => {
    const nestedFramesPage = new NestedFramesPage(page);
    await use(nestedFramesPage);
  },

  redirectLinkPage: async ({ page }, use) => {
    const redirectLinkPage = new RedirectLinkPage(page);
    await use(redirectLinkPage);
  },

  secureFileDownloadPage: async ({ page }, use) => {
    const secureFileDownloadPage = new SecureFileDownloadPage(page);
    await use(secureFileDownloadPage);
  },

  shadowDOMPage: async ({ page }, use) => {
    const shadowDOMPage = new ShadowDOMPage(page);
    await use(shadowDOMPage);
  },

  shiftingContentPage: async ({ page }, use) => {
    const shiftingContentPage = new ShiftingContentPage(page);
    await use(shiftingContentPage);
  },

  slowResourcesPage: async ({ page }, use) => {
    const slowResourcesPage = new SlowResourcesPage(page);
    await use(slowResourcesPage);
  },

  typosPage: async ({ page }, use) => {
    const typosPage = new TyposPage(page);
    await use(typosPage);
  },

  wysiwygEditorPage: async ({ page }, use) => {
    const wysiwygEditorPage = new WYSIWYGEditorPage(page);
    await use(wysiwygEditorPage);
  },
});

export { expect } from '@playwright/test';

// Helper function for creating page fixtures without using the test fixture system
export async function createPageFixtures(page: Page) {
  return {
    homePage: new HomePage(page),
    loginPage: new LoginPage(page),
    checkboxPage: new CheckboxPage(page),
    dropdownPage: new DropdownPage(page),
    basicAuthPage: new BasicAuthPage(page),
    alertsPage: new AlertsPage(page),
    keyPressesPage: new KeyPressesPage(page),
    dragDropPage: new DragDropPage(page),
    hoversPage: new HoversPage(page),
    tablePage: new TablePage(page),
    brokenImagesPage: new BrokenImagesPage(page),
    fileUploadPage: new FileUploadPage(page),
    addRemoveElementsPage: new AddRemoveElementsPage(page),
    dynamicContentPage: new DynamicContentPage(page),
    inputsPage: new InputsPage(page),
    dynamicLoadingPage: new DynamicLoadingPage(page),
    notificationPage: new NotificationPage(page),
    statusCodesPage: new StatusCodesPage(page),
    framesPage: new FramesPage(page),
    contextMenuPage: new ContextMenuPage(page),
    disappearingElementsPage: new DisappearingElementsPage(page),
    multipleWindowsPage: new MultipleWindowsPage(page),
    abTestingPage: new ABTestingPage(page),
    challengingDOMPage: new ChallengingDOMPage(page),
    digestAuthPage: new DigestAuthPage(page),
    dynamicControlsPage: new DynamicControlsPage(page),
    entryAdPage: new EntryAdPage(page),
    exitIntentPage: new ExitIntentPage(page),
    fileDownloadPage: new FileDownloadPage(page),
    floatingMenuPage: new FloatingMenuPage(page),
    forgotPasswordPage: new ForgotPasswordPage(page),
    geolocationPage: new GeolocationPage(page),
    horizontalSliderPage: new HorizontalSliderPage(page),
    infiniteScrollPage: new InfiniteScrollPage(page),
    jQueryUIMenusPage: new JQueryUIMenusPage(page),
    javaScriptErrorPage: new JavaScriptErrorPage(page),
    largeDeepDOMPage: new LargeDeepDOMPage(page),
    nestedFramesPage: new NestedFramesPage(page),
    redirectLinkPage: new RedirectLinkPage(page),
    secureFileDownloadPage: new SecureFileDownloadPage(page),
    shadowDOMPage: new ShadowDOMPage(page),
    shiftingContentPage: new ShiftingContentPage(page),
    slowResourcesPage: new SlowResourcesPage(page),
    typosPage: new TyposPage(page),
    wysiwygEditorPage: new WYSIWYGEditorPage(page),
  };
}
