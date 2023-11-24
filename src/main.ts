import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if ((window as any)['ngRef']) {
    (window as any)['ngRef'].destroy();
  }
  (window as any)['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));