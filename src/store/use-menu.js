import { defineStore } from 'pinia'

export const useMenu = defineStore('menuId', {
  state: () => {
    return {
        selectedKeys: [],
        openkeys: []
    }
  },
  actions: {
    onSelectedKeys(data) {
        this.selectedKeys = data
    },
    
    onOpenkeys(data) {
        this.openkeys = data
    }
  }
})