<template>
    Đây là page Role
</template>
<script>
import { useMenu } from '../../../store/use-menu';
    export default {
        setup() {
            const store = useMenu()
            store.onSelectedKeys(['admin-roles'])
        }
    }
</script>
