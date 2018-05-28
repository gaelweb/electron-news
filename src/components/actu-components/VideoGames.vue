<template>
    <MainActu
    :dataUrlFeedCategory="tabUrlVideoGames"
    >
    </MainActu>
</template>

<script>
import MainActu from '@/components/MainActu'

    export default {
        name: 'VideoGames',
        components: {
            MainActu
        },
        data () {
            return {
                tabUrlVideoGames: [
                    // 'http://www.jeuxvideo.com/rss/rss.xml',
                    // 'http://www.linternaute.com/hightech/rss/',
                    // 'http://www.jeuxactu.com/rss/ja.rss', 
                    // 'https://www.armateam.org/feed/',
                    // 'https://www.presse-citron.net/category/lifestyle/jeu-video/feed/',
                    // 'https://gamewave.fr/rss/',
                    // 'https://www.actugaming.net/feed/',
                    // 'https://www.journaldugeek.com/feed/',                                                                                                                     
                    'https://www.gamekult.com/feed.xml',
                    'https://www.lemonde.fr/jeux-video/rss_full.xml',
                    'https://pix-geeks.com/jeux-video/feed/',
                    'https://www.youtube.com/feeds/videos.xml?channel_id=UCRXcryyD7dzNQzd0Zkbj3ug',
                    'https://hightech.bfmtv.com/rss/jeux-videos/',
                    'https://www.youtube.com/feeds/videos.xml?channel_id=UC_yP2DpIgs5Y1uWC0T03Chw',
                ]
            }
        }
    }
</script>

<style scoped>

</style>

