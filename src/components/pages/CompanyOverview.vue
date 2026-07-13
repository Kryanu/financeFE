<template>
    <PageTemplate title="Companies Overview">
        <template v-slot:content>
            <OverviewPane />
        </template>
    </PageTemplate>
</template>

<script>
import PageTemplate from './PageTemplate.vue'
import OverviewPane from '../molecules/OverviewPane.vue'
export default {
    components: {
        PageTemplate,
        OverviewPane
    }
}
</script>