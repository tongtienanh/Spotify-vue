import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            music: null,
            albums: [
                { id: '0', img: 'images/nhactre100.jpg', title: 'Nhạc Trẻ Mới Nhất', dec: 'Danh sách tổng hợp nhạc mới hàng tuần. Cập nhật mỗi thứ Hai.' },
                { id: '1', img: 'images/trutinh100.jpg', title: 'Nhạc Trữ Tình Bolero', dec: 'Nhún nhảy theo những giai điệu mới toanh từ nghệ sĩ bạn theo dõi và đĩa đơn mới dành cho bạn. Cập nhật mỗi thứ Sáu.' },
                { id: '2', img: 'images/rapviet100.jpg', title: 'Rap Việt', dec: 'Henry Jackman' },
                { id: '3', img: 'images/remix100.jpg', title: 'Remix Việt ', dec: 'Henry Jackman' }
            ]
        }
    },
    mutations: {
        setMusic(state, musicPayload) {
            state.music = musicPayload
        },
    },
    actions: {
        async fetchYoungMusic({ commit }) {
            const res = await fetch('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR1g9p6Vs8NPHPVjRJBwwP81MpZTAN3AvoXgkMz_CyNYfCinE5lHENHr73Y')
            const data = await res.json()
            var arr = []
            Object.values(data.songs).forEach(s => { arr.push(s) })
            var newArr = await arr.flat()
            var ditme = await newArr.map(s => s.songs)
            console.log(newArr[0].songs[0].music)
            commit('setMusic', newArr)
        }
    }
})
export default store