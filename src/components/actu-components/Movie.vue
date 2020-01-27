<template>
  <MainActu :dataUrlFeedCategory="urlFeed"></MainActu>
</template>

<script>
import MainActu from "@/components/MainActu";

export default {
  name: "Movie",
  components: {
    MainActu
  },
  data() {
    return {
      urlFeed: [
        "https://www.lemonde.fr/cinema/rss_full.xml",
        "https://pix-geeks.com/cinema/film/feed/",
        "https://pix-geeks.com/cinema/serie-tv/feed/",
        "https://people.bfmtv.com/rss/cinema/",
        "https://www.lepoint.fr/cinema/rss.xml",
        "https://www.premiere.fr/rss/actu-live",
        "https://people.bfmtv.com/rss/series/",
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCoRxHqlzVNYFQGR1IxfefIQ",
        "https://www.melty.fr/series-5.rss",
        "https://www.melty.fr/actu.rss"
      ]
    };
  }
};
</script>

<style>
</style>

