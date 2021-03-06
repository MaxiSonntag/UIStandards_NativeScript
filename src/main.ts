// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";


/*import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";
declare var android: any;

if (platform.isAndroid && platform.device.sdkVersion >= "21") {
    application.android.on(application.AndroidApplication.activityStartedEvent, function() {
        let window = application.android.startActivity.getWindow();
        let decorView = window.getDecorView();
        decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_DARK_STATUS_BAR);
    })
};*/


// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
