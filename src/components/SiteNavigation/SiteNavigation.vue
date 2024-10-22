<template>
  <div class="site-navigation">
    <div class="background-polygon"></div>
    <img
      src="./PilkIsland.png"
      alt="Welcome to Pilk Island"
      class="pilk-island"
      usemap="#pilk-island"
    />
    <map name="pilk-island">
      <area
        target=""
        alt=""
        title="Who are we?"
        href=""
        coords="205,288,408,197"
        shape="rect"
      />
      <area
        target=""
        alt=""
        title="Fun and games in the Pilksoft Stadium"
        href=""
        coords="388,352,553,465"
        shape="rect"
      />
      <area
        target=""
        alt=""
        title="Our software"
        href=""
        coords="630,319,825,394"
        shape="rect"
      />
      <area
        target=""
        alt=""
        title="News and blog"
        href=""
        coords="672,208,851,280"
        shape="rect"
      />
    </map>
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
        Although we have taken the utmost care to ensure there are no viruses on
        this website, we recommend you scan all attachments for viruses after
        downloading.
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
