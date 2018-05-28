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
                    // 'http://www.leparisien.fr/high-tech/rss.xml#xtor=RSS-1481423633',  
                    // 'https://www.journaldugeek.com/tag/high-tech/feed/', 
                    // 'https://www.canardpc.com/feed',                                                         
                    'https://www.20minutes.fr/feeds/rss-high-tech.xml',
                    'https://pix-geeks.com/tech/feed/',
                    'https://lexpansion.lexpress.fr/rss/high-tech.xml',
                    'https://www.lepoint.fr/high-tech-internet/rss.xml',
                    'https://www.challenges.fr/high-tech/rss.xml',
                    'https://www.ladepeche.fr/rss/high-tech-sciences.rss',
                    'https://www.01net.com/rss/actualites/culture-medias/',
                    'https://hightech.bfmtv.com/rss/internet/',
                    'https://www.frenchweb.fr/feed',
                    'https://www.journaldunet.com/rss/'
                ]
            }
        }
    }
</script>
