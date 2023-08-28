<template>
    <a-card hoverable title="Tài khoản" style="width: 100%">
        <div class="row">
            <div class="col-12 mb-2 d-flex justify-content-end">
                <a-button type="primary" >
                    <router-link :to="{ name: 'admin-users-create'}">
                        +
                    </router-link>
                </a-button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
                    <template #bodyCell="{ column, index, record }">
                        <template v-if="column.key === 'index'">
                           <span>{{ index + 1 }}</span>
                        </template>
                        <template v-if="column.key === 'status'">
                            <template v-if="record.status_id === 1">
                                <span class="text-primary">{{ record.status }}</span>
                            </template>
                            <template v-else-if="record.status_id === 2">
                                <span class="text-danger">{{ record.status }}</span>
                            </template>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </a-card>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { RepositoryFactory } from '@/api/RepositoryFactory.js';
import { useMenu } from '@/store/use-menu';

    export default defineComponent({
        setup() {
            const store = useMenu()
            store.onSelectedKeys(['admin-users'])

            const users = ref([])
            const columns = [
                {
                    title: '#',
                    key: 'index'
                },
                {
                    title: 'Avatar',
                    key: 'avatar'
                },
                {
                    title: 'Tài khoản',
                    dataIndex: 'username',
                    key: 'username',
                },
                {
                    title: 'Họ Tên',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: 'Phòng ban',
                    dataIndex: 'department',
                    key: 'department',
                    responsive: ['sm'],
                },
                {
                    title: 'Vai trò',
                    dataIndex: 'department',
                    key: 'department'
                },
                {
                    title: 'Tình trạng',
                    dataIndex: 'status',
                    key: 'status'
                },
                {
                    title: 'Công cụ',
                    key: 'action',
                    fixed: 'right'
                }
            ]

            const fetchUsers = () => {
                const userRepository = RepositoryFactory.get('users')

                userRepository.getAllUsers()
                    .then((response) => {
                        users.value = response
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }

            fetchUsers()

            return {
                users,
                columns
            }
        }
    })
</script>