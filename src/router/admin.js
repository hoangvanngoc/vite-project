import Admin from '../layouts/admin.vue'
import UserAdmin from '../pages/admin/users/index.vue'
import UserCreate from '../pages/admin/users/create.vue'
import RoleAdmin from '../pages/admin/roles/index.vue'
import SettingAdmin from '../pages/admin/settings/index.vue'

const admin = [
    {
        path: "/admin",
        component: Admin,
        children: [
            {
                path: "users",
                name: "admin-users",
                component: UserAdmin
            },
            {
                path: "users/create",
                name: "admin-users-create",
                component: UserCreate
            },
            {
                path: "roles",
                name: "admin-roles",
                component: RoleAdmin
            },
            {
                path: "settings",
                name: "admin-settings",
                component: SettingAdmin
            }
        ]
    }
]

export default admin