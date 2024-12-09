<script setup lang="ts">
import { ref } from "vue";

const messages: string[] = [
  "Basingstoke - Local man dies of ligma, after missing their CrossCountry train",
  "Reading - Local youth is caught fare dodging, and is charged £923,123.20 by First Great Western",
  "London Paddington - Local woman attempts Reading to Shenfield via Crossrail. Attempt fails due to terminus at Paddington",
  "Stratford - Local man dies of old age after no international trains stop at Stratford International",
  "Pyongyang - Local residents going down on escalator to metro station; will arrive in approximately 2 hours",
  "Hounslow - Heathrow Terminal 1 missing - Contact the British Transport Police if found. Bounty - 50 new pence",
  "Coquelles - British geezer attempts to drive into Eurotunnel, and is apprehended by the police",
  "Sheffield - American lost t'up north after accidentally typing 'Sheffield' into Google Maps instead of 'Shenfield'.",
];

const copyright = ref(messages[Math.floor(messages.length * Math.random())]);
</script>

<template>
  <div class="site-navigation">
    <div class="background-polygon"></div>
    <div class="pilk-island">
      <img
        class="pilk-island-picture"
        src="./PilkIsland.png"
        alt="Welcome to Pilk Island"
      />
      <a
        class="pilk-island-link pilk-island-link-1"
        href="#about"
        title="Learn more about Pilksoft Interactive On-Line"
      >
        Who are we?
      </a>
      <a
        class="pilk-island-link pilk-island-link-2"
        href="#software"
        title="Join us in the 'fun zone' with our games!"
      >
        Pilk Games
      </a>
      <a
        class="pilk-island-link pilk-island-link-3"
        href="#software"
        title="Software Solutions"
      >
        Pilk Software
      </a>
      <a class="pilk-island-link pilk-island-link-4" href="#news" title="Blog">
        News Centre
      </a>
    </div>
    <div class="copyright-container">
      <p class="copyright-line">Copyright Pilksoft Interactive On-Line</p>
      <span class="tagline">
        Serving absolutely nothing in 322 countries and in 754 languages
      </span>
    </div>
    <div class="virus-container">
      <a target="_blank" href="https://www.microsoft.com/ie/">
        <img src="./iexplore.gif" />
      </a>
      <a target="_blank" href="https://www.mozilla.com/">
        <img src="./netscape.gif" />
      </a>
      <a target="_blank" href="https://www.rust-lang.org/">
        <img src="./transnow.gif" />
      </a>
      <p>
        <strong>In the news: </strong>
        {{ copyright }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.site-navigation {
  display: flex;
  justify-content: center;
  position: relative;
  width: 1107px;
  height: 553px;
  margin-left: auto;
  margin-right: auto;
}

.pilk-island {
  position: absolute;
}

.background-polygon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  clip-path: polygon(0 303px, 0 100%, 100% 100%, 100% 255px);
  border-radius: 1em;
}

.copyright-container,
.virus-container {
  position: absolute;
  bottom: 0;
  padding: 0.5em;
}

.copyright-line {
  font-family: "OpenTTD Sans";
  font-family: 10pt;
}
.tagline,
.virus-container {
  font-family: "OpenTTD Small";
  font-size: 8pt;
}

.copyright-container {
  left: 0;
  right: 54.291%;
  text-align: left;
}
.virus-container {
  left: 54.291%;
  right: 0;
  text-align: right;
}

.pilk-island-picture {
  max-width: 100%;
}

.pilk-island-link {
  position: absolute;
  display: block;
  line-height: 0;
  font-size: 0;
  color: transparent;
}

.pilk-island-link-1 {
  left: 19.03%;
  top: 35.62%;
  right: 62.12%;
  bottom: 47.9%;
}
.pilk-island-link-2 {
  left: 34.1%;
  top: 63.65%;
  right: 48.65%;
  bottom: 15.91%;
}
.pilk-island-link-3 {
  left: 56.4%;
  top: 57.69%;
  right: 25.1%;
  bottom: 30.1%;
}
.pilk-island-link-4 {
  left: 59.9%;
  top: 37.61%;
  right: 22.5%;
  bottom: 49.37%;
}

@media (prefers-color-scheme: dark) {
  .background-polygon {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .copyright-container,
  .virus-container {
    color: white;
  }
}

@media (max-width: 1200px) {
  .site-navigation,
  .background-polygon,
  .pilk-island {
    width: 100%;
  }

  .site-navigation {
    display: grid;
    grid-template: "map map" "copyright virus";
  }

  .pilk-island {
    position: inherit;
    grid-area: map;
  }

  .site-navigation {
    flex-direction: column;
    height: unset;
  }

  .copyright-container,
  .virus-container {
    position: inherit;
    top: unset;
    left: unset;
    right: unset;
    bottom: unset;
    justify-content: end;
    display: flex;
    flex-direction: column;
  }

  .copyright-container {
    grid-area: copyright;
  }

  .virus-container {
    grid-area: virus;
  }

  .background-polygon {
    clip-path: unset;
    /* display: none; */
  }
}
</style>
