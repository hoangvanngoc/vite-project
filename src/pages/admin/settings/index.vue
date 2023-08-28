<template>
    Đây là Setting
</template>
<script>
import { useMenu } from '@/store/use-menu';
    export default {
        setup() {
            const store = useMenu()
            store.onSelectedKeys(['admin-settings'])
        }
    }
</script>
