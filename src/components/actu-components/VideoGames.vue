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
                    'https://www.gamekult.com/feed.xml',
                    'http://www.jeuxactu.com/rss/ja.rss',
                    'https://www.lemonde.fr/jeux-video/rss_full.xml',
                    // 'http://www.jeuxvideo.com/rss/rss.xml'
                ]
            }
        }
    }
</script>

<style scoped>

</style>

