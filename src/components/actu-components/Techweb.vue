<template>
    <MainActu
    :dataUrlFeedCategory="urlfeed">
    </MainActu>
</template>

<script>
import MainActu from '@/components/MainActu'

    export default {
        name: 'Techweb',
        components: {
            MainActu
        },
        data () {
            return {
                urlfeed: [
                    'https://www.20minutes.fr/feeds/rss-high-tech.xml',
                    'https://pix-geeks.com/tech/feed/',
                    'http://www.leparisien.fr/high-tech/rss.xml#xtor=RSS-1481423633',
                    // 'https://www.journaldugeek.com/tag/high-tech/feed/'
                ]
            }
        }
    }
</script>
