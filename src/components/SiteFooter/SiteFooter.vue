<template>
  <footer class="footer">
    <div class="full-width-container columns">
      <div>
        <p>
          Copyright Pilksoft Interactive On-Line 2024
        </p>
      </div>
      <div>
        <p><strong>Links</strong></p>
        <ul>
          <li><a href="https://git.pilk.uk/">Pilksoft GitLab</a></li>
          <li><a href="https://github.com/pilksoc/">Pilksoft GitHub</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.full-width-container {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
.columns {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
