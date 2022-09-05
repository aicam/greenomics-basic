<template>
  <v-app dark style="overflow-x: hidden; position: relative;">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      disable-resize-watcher
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      v-if="(loc.length !== 2) ? true : this.headerOpacity > 0.01"
      :style="{opacity: headerOpacity}"
      class="navbar"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer></v-spacer>
      <img id="header-logo" src="@/static/logo.png" />
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="ma-0">
      <v-container class="py-0 px-0" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!--    <v-footer-->
<!--      :absolute="!fixed"-->
<!--      app-->
<!--    >-->
<!--      <span>&copy; {{ new Date().getFullYear() }}</span>-->
<!--    </v-footer>-->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => {
    return {
      loc: "",
      headerOpacity: 0,
      clipped: false,
      drawer: false,
      fixed: false,
      hereIs: 'home',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
          in: 'home,verifier,trader,manager'
        },
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Verifier Homepage',
          to: '/verifier-pages',
          in: 'verifier'
        },
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Trader Homepage',
          to: '/trader-pages',
          in: 'trader'
        },
        {
          icon: 'mdi-view-dashboard-outline',
          title: 'Manager Homepage',
          to: '/manager-pages',
          in: 'manager'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Marketplace',
          to: '/marketplace',
          in: 'home,verifier,trader,manager'
        },
        {
          icon: 'mdi-check-decagram',
          title: 'Verifier',
          to: '/verifier',
          in: 'home'
        },
        {
          icon: 'mdi-cart-variant',
          title: 'Trader',
          to: '/trader',
          in: 'home'
        },
        {
          icon: 'mdi-molecule-co2',
          title: 'Manager',
          to: '/manager',
          in: 'home'
        },
        {
          icon: 'mdi-chat-question-outline',
          title: 'FAQ',
          to: '/#',
          in: 'home,verifier,trader,manager'
        },
        {
          icon: 'mdi-email-edit-outline',
          title: 'Contact Us',
          to: '/#',
          in: 'home,verifier,trader,manager'
        },
        {
          icon: 'mdi-newspaper-variant-outline',
          title: 'News',
          to: '/#',
          in: 'home,verifier,trader,manager'
        }
      ],
      registrationItems: [
        {
          title: 'Verifier',
          to: '/verifier_registration'
        },
        {
          title: 'Trader',
          to: '/trader_registration'
        },
        {
          title: 'Producer',
          to: '/producer_registration'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted() {
    this.loc = window.location.href.split('/').filter(i => i !== '');
    window.addEventListener("scroll", (event) => {
      var scroll_y = window.scrollY;
      if (scroll_y !== undefined)
      this.headerOpacity = (scroll_y / 500) < 1 ? (scroll_y / 500) : 1
      if (window.location.href.split('/').filter(i => i !== '').length !== 2) {
        this.headerOpacity = 1
        window.removeEventListener("scroll", this)
      }
    });

    if (window.location.href.includes('verifier-pages'))
      this.items = this.items.filter((it, i) => it.in.includes('verifier'))
    else if(window.location.href.includes('trader-pages'))
      this.items = this.items.filter((it, i) => it.in.includes('trader'))
    else if(window.location.href.includes('manager-pages'))
      this.items = this.items.filter((it, i) => it.in.includes('manager'))
    else
      this.items = this.items.filter((it, i) => it.in.includes('home'))
  }
}
</script>

<style>
.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 10;
}

@media only screen and (min-width: 768px) {
  #header-logo {
    transform: scale(0.5);
  }
}

@media only screen and (max-width: 600px) {
  #header-logo {
    transform: scale(0.4);
  }
}
html {
  scroll-behavior: smooth;
}
</style>
