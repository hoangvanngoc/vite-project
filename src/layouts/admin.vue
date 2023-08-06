<script setup>
    import TheHeader from '../components/TheHeader.vue';
    import TheMenu from '../components/TheMenu.vue';
</script>
<template>
    <TheHeader/>

    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered>
                    <template #header>
                       <div>Bảng điều khiển</div>
                    </template>
                    <TheMenu/>
                </a-list>
            </div>
            <div class="col-12 col-sm-9">
                <router-view></router-view>
            </div>
        </div>    
    </div>
</template>