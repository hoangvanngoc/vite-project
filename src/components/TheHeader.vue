<script >
     import TheMenu from '../components/TheMenu.vue';
     import { ref, defineComponent } from 'vue';

     export default defineComponent({
          components: {
               TheMenu
          },
          setup() {
               const open = ref(false);
               const openUser = ref(false)

               const showDrawer = () => {
                    open.value = true;
               };

               const showDrawerUser = () => {
                    openUser.value = true;
               };

               return {
                    open,
                    openUser,
                    showDrawer,
                    showDrawerUser,
               };
          }
     })
     
</script>
<template>
    <div class="container-fluid text-white">
        <div class="row" style="background-color: #00713d; padding: 1rem;">
           <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer">X</span>
           </div>

           <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/logo.png" height="40" width="50" alt="logo" class="ms-3 me3">
                <span class="d-none d-sm-flex ml-sm-1">Quan Tri</span>
           </div>

           <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
            <span>Admin</span>
           </div>

           <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawerUser">X</span>
           </div>
        </div>    
    </div>

    <a-drawer
          v-model:open="open"
          title="DANH MUC"
          placement="left"
          >
          <TheMenu/>
     </a-drawer>

     <a-drawer
          v-model:open="openUser"
          title="ADMIN"
          placement="right"
          >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
     </a-drawer>
</template>