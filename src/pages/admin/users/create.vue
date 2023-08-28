<template>
    <form @submit.prevent="createUser()">
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
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.status_id
                                }">Tình Trạng:</span>
                            </label>
                            
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select
                                show-search
                                placeholder="Tình Trạng"
                                style="width: 100%"
                                :options="users_status"
                                :filter-option="filterOption"
                                allow-clear
                                v-model:value="status_id"
                                :class="{ 'select-danger' : errors.status_id }"
                            ></a-select>
                            <div class="w-100 text-danger">
                                <small v-if="errors.status_id">{{ errors.status_id[0] }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.username
                                }">Tên tài khoản:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input 
                                placeholder="Tên tài khoản" 
                                allow-clear 
                                v-model:value="username"
                                :class="{ 'select-danger' : errors.username }"
                            />
                            <div class="w-100 text-danger">
                                <small v-if="errors.username">{{ errors.username[0] }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.name
                                }">Họ & Tên:</span>
                            </label>
                            
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input 
                                placeholder="Họ và Tên" 
                                allow-clear 
                                v-model:value="name"
                                :class="{ 'select-danger' : errors.name }"
                            />
                            <div class="w-100 text-danger">
                                <small v-if="errors.name">{{ errors.name[0] }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.email
                                }">Email:</span>
                            </label>
                            
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input 
                                placeholder="Email" 
                                allow-clear 
                                v-model:value="email"
                                :class="{ 'select-danger' : errors.email }"
                            />
                            <div class="w-100 text-danger">
                                <small v-if="errors.email">{{ errors.email[0] }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.departments
                                }">Phòng ban:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select
                                show-search
                                placeholder="Phòng ban"
                                style="width: 100%"
                                :options="departments"
                                :filter-option="null"
                                v-model:value="departments_id"
                                allow-clear
                                :class="{ 'select-danger' : errors.departments }"
                            ></a-select>
                            <div class="w-100 text-danger">
                                <small v-if="errors.departments">{{ errors.departments[0] }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password
                                }">Mật khẩu:</span>
                            </label>
                            
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password 
                                placeholder="Mật khẩu" 
                                allow-clear 
                                v-model:value="password"
                                :class="{ 'select-danger' : errors.password }"
                            />
                            <div class="w-100 text-danger">
                                <small v-if="errors.password">{{ errors.password[0] }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password_confirmation
                                }">Xác nhận mật khẩu:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password 
                                placeholder="Xác nhận mật khẩu" 
                                allow-clear 
                                v-model:value="password_confirmation"
                                :class="{ 'select-danger' : errors.password_confirmation }"
                            />
                            <div class="w-100 text-danger">
                                <small v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                    <a-button class="mb-2 me-sm-2">
                        <router-link :to="{ name: 'admin-users' }">
                            <span>Hủy</span>
                        </router-link>
                    </a-button>
                    <a-button type="primary" html-type="submit">
                        <span>Lưu</span>
                    </a-button>
                </div>
            </div>
        </a-card>
    </form>
</template>
<style>
    .select-danger {
        border: 1px solid red;
    }
</style>
<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { RepositoryFactory } from '@/api/RepositoryFactory.js';
import { useMenu } from '@/store/use-menu';

    export default defineComponent({
        setup() {
            const store = useMenu()
            store.onSelectedKeys(['admin-users'])

            const users_status = ref([[]])
            const departments = ref([[]])

            const errors = ref({})

            const users = reactive({
                username: "",
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                departments_id: [],
                status_id: []
            })

            const getUserSelect = () => {
                const userRepository = RepositoryFactory.get('users')

                userRepository.getUserCreate()
                .then((response) => {
                   users_status.value = response.data.user_status
                   departments.value = response.data.departments
                })
                .catch((error) => {
                    console.log(error)
                })
            }

            getUserSelect()

            const filterOption = (input, option) => {
                return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            
            const createUser = () => {
                const userRepository = RepositoryFactory.get('users')

                userRepository.createPost(users)
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((error) => {
                        console.log(error.response.data.errors)
                        errors.value = error.response.data.errors  
                    })
            }

            return {
                users_status,
                departments,
                errors,
                ...toRefs(users),
                filterOption,
                createUser
            }
        }
    })
</script>