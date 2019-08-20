<template>
    <div>
        <Header title="我的喵喵" />
        <TabBar />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
export default {
    name: "Mine",
    components: {
      Header,
      TabBar
    }
}
</script>