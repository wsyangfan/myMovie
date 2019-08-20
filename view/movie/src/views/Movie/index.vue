<template>
    <div>
        <Header title="喵喵电影" />
            <div id="content">
                <div class="movie_menue">
                    <div class="city_name">
                        <span>大连</span><i class="iconfont icon-lower-triangle"></i>
                    </div>
                    <div class="hot_switch">
                        <div class="hot_item active">正在热映</div>
                        <div class="hot_item">即将上映</div>
                    </div>
                    <div class="search_entry">
                        <i class="iconfont icon-sousuo"></i>
                    </div>
                </div>
            </div>
            <keep-alive>
                <router-view />
            </keep-alive>
        <TabBar />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
export default {
    name: "Movie",
    components: {
      Header,
      TabBar
    }
}
</script>
