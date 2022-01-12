const App = {
    data() {
        return {
            listLength: -1,
            list: [{
                id: 1,
                title: '熔岩巧克力蛋糕',
                originPrice: 100,
                sellPrice: 80,
                isActive: false,
            },
            {
                id: 2,
                title: '香草草莓蛋糕',
                originPrice: 120,
                sellPrice: 90,
                isActive: false,
            },
            ],
            tempList: {
                id: null,
                title: null,
                originPrice: null,
                sellPrice: null,
                isActive: false,
            },
        }
    },
    methods: {
        activeProduct(e) {
            let index = e.target.id - 1;
            if (this.list[index].isActive === false) {
                this.list[index].isActive = true;
            }
            else { this.list[index].isActive = false }
        },
        saveListLength() {
            this.listLength = this.list.length;
        },
        addList() {
            this.tempList.id = this.list.length + 1;
            let obt = { ...this.tempList }
            this.list.push(obt);
            this.tempList.id = null;
            this.tempList.title = null;
            this.tempList.originPrice = null;
            this.tempList.sellPrice = null;
            //console.log(this.list)
        },
        delList(e) {
            console.log(e.target.nodeName)
            console.log(e.target.dataset.index)
            if (e.target.nodeName === 'BUTTON') {
                this.list.splice(e.target.dataset.index, 1)
            };
            this.saveListLength()
        },
        delAll() {
            this.list = [];
            this.saveListLength()
        },

    },
    created() {
        this.saveListLength()
    }
}
Vue.createApp(App).mount('#app')