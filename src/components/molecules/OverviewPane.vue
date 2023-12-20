<template>
    <div class="grid grid-cols-5 gap-x-28 h-full">
            <SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/><SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/><SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/><SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/><SmallCard @overview="pushToOverview" ticker="DIS" score="12/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
            <SmallCard @overview="pushToOverview" ticker="MSFT" score="10/40"/>
        </div>
</template>

<script>
import { SmallCard } from '../atoms';
export default {
    components: {
        SmallCard
    },
    methods: {
        pushToOverview(ticker) {
            console.log(ticker)
        }
    }
}
</script>
