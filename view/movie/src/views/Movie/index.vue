<template>
  <div>
    <Header title="喵喵电影" />
    <div id="content">
      <div class="movie_menue">
        <div class="city_name">
          <span>大连</span>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="hot_switch">
          <div class="hot_item active">正在热映</div>
          <div class="hot_item">即将上映</div>
        </div>
        <div class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar />
  </div>
</template>

<style lang="scss" scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;

  .movie_menue {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    z-index: 10;
    .city_name {
      margin-left: 20px;
      height: 100%;
      line-height: 45px;
      &.active {
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
      }
    }
    .hot_switch {
      display: flex;
      height: 100%;
      line-height: 45px;
    }
    .hot_item {
      font-size: 15px;
      color: #666;
      width: 80px;
      text-align: center;
      margin: 0 12px;
      font-weight: 700;
      &.active {
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
      }
    }
    .search_entry {
      margin-right: 20px;
      height: 100%;
      line-height: 45px;
      i {
        font-size: 24px;
        color: red;
      }
      &.active {
        color: #ef4238;
        border-bottom: 2px #ef4238 solid;
      }
    }
  }
}
</style>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  }
};
</script>
