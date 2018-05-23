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
                    'https://www.gamekult.com/feed.xml'
                ]
            }
        }
    }
</script>

<style scoped>
.content-news {
    position: absolute;
    margin-left: 80px;
}
</style>

