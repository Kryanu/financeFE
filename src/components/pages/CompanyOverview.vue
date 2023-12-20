<template>
    <PageTemplate title="Companies Overview">
        <template v-slot:content>
            <OverviewPane />
        </template>
    </PageTemplate>
</template>

<script>
import { PageTemplate } from './index'
import { OverviewPane} from '../molecules'
export default {
    components: {
        PageTemplate,
        OverviewPane
    }
}
</script>