<template>
    <a-card hoverable title="Tài khoản" style="width: 100%">
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="users" :columns="columns">
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
import { useMenu } from '../../../store/use-menu';
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
                    key: 'department'
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
            ]

            const getUsers = async () => {
                try {
                        const response = await axios.get('http://127.0.0.1:8000/api/users');
                        console.log(response);
                        users.value = response.data
                    } catch (error) {
                        console.error(error);
                    }
            }

            getUsers()

            return {
                users,
                columns
            }
        }
    })
</script>