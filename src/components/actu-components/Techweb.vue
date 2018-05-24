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
                    'https://www.20minutes.fr/feeds/rss-high-tech.xml'
                ]
            }
        }
    }
</script>
