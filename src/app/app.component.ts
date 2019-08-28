import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },

    {
      title: 'FIND A RIDE',
      url: '/find-ride',
      icon: 'locate'
    },


    {
      title: 'MY PROFILE',
      url: '/profile',
      icon: 'contact'
    },

    {
      title: 'MY TRIPS',
      url: '/mytrips',
      icon: 'watch'
    },

    {
      title: 'MY VEHICLES',
      url: '/vehicles',
      icon: 'logo-model-s'
    },
    {
      title: 'MY RATINGS',
      url: '/ratings',
      icon: 'trending-up'
    },

    {
      title: 'MY ENQUIRY',
      url: '/enquires',
      icon: 'snow'
    },
    {
      title: 'MY PAYMENTS',
      url: '/payments',
      icon: 'cart'
    },

    {
      title: 'SUPPORT',
      url: '/supports',
      icon: 'chatboxes'
    },
    {
      title: 'LOG OUT',
      url: '/logout',
      icon: 'lock'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
