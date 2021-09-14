import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            music: null,
            albums: [
                { id: '0', img: 'images/nhactre100.jpg', title: 'Nhạc Trẻ', dec: 'Nhạc mới hàng tuần' },
                { id: '1', img: 'images/trutinh100.jpg', title: 'Nhạc Trữ', dec: 'Giai điệu mới toanh' },
                { id: '2', img: 'images/rapviet100.jpg', title: 'Rap Việt', dec: 'Henry Jackman' },
                { id: '3', img: 'images/remix100.jpg', title: 'Remix Việt ', dec: 'Henry Jackman' }
            ],
            songs: null,
            likeSong: []
        }
    },
    mutations: {
        setMusic(state, musicPayload) {
            state.music = musicPayload
        },
        setSong(state, songPayload) {
            state.songs = songPayload
        },
        setLikedSong(state, likedSongPayload) {
            state.likeSong = likedSongPayload
        }
    },
    actions: {
        async fetchYoungMusic({ commit }) {
            const res = await fetch('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR1g9p6Vs8NPHPVjRJBwwP81MpZTAN3AvoXgkMz_CyNYfCinE5lHENHr73Y')
            const data = await res.json()
            var arr = []
            Object.values(data.songs).forEach(s => { arr.push(s) })
            var newArr = await arr.flat()
            var song = newArr.map(s => s.songs)
            commit('setMusic', newArr)
            commit('setSong', song.flat())

        },
        likedSong({ commit }, payload) {
            commit('setLikedSong', payload)
            console.log(payload)
        },
    }
})
export default store