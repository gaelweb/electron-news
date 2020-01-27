<template>
  <MainActu :dataUrlFeedCategory="urlfeed"></MainActu>
</template>

<script>
import MainActu from "@/components/MainActu";

export default {
  name: "Techweb",
  components: {
    MainActu
  },
  data() {
    return {
      urlfeed: [
        "https://www.20minutes.fr/feeds/rss-high-tech.xml",
        "https://pix-geeks.com/tech/feed/",
        "https://lexpansion.lexpress.fr/rss/high-tech.xml",
        "https://www.lepoint.fr/high-tech-internet/rss.xml",
        "https://www.challenges.fr/high-tech/rss.xml",
        "https://www.01net.com/rss/actualites/culture-medias/",
        "https://hightech.bfmtv.com/rss/internet/",
        "https://www.frenchweb.fr/feed",
        "https://www.journaldunet.com/rss/"
      ]
    };
  }
};
</script>
