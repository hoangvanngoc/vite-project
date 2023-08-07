<template>
    <a-card title="Tạo mới tài khoản" style="width: 100%;">
        <div class="row">
            <div class="col-12 col-sm-4">
               <div class="row"> 
                <div class="col-12 d-flex justify-content-center">
                    <a-avatar shape="square" :size="200">
                        <template #icon>
                            <img src="../../../assets/avatar.png" alt="Avatar">
                        </template>
                    </a-avatar>
                </div>
                <div class="col-12 d-flex justify-content-center mt-3">
                    <a-button type="primary">
                        <span>+ Chọn ảnh</span>
                    </a-button>
                </div>
               </div>
            </div>
            <div class="col-12 col-sm-8">
                2
            </div>
        </div>
    </a-card>
</template>
<script>
import { defineComponent } from 'vue'
    import { useMenu } from '../../../store/use-menu';
    export default defineComponent({
        setup() {
            const store = useMenu()
            store.onSelectedKeys(['admin-users'])
        }
    })
</script>