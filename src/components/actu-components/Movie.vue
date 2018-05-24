<template>
    <MainActu
    :dataUrlFeedCategory="urlFeed"
    >
    </MainActu>
</template>

<script>
import MainActu from '@/components/MainActu'

    export default {
        name: 'Movie',
        components: {
            MainActu
        },
        data () {
            return {
                urlFeed: [
                    'https://www.lemonde.fr/culture/rss_full.xml',
                    'http://rss.allocine.fr/ac/bandesannonces/anepasmanquer?format=xml'
                ]
            }
        }
    }
</script>

<style>

</style>

