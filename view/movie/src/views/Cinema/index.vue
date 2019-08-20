<template>
    <div>
        <Header title="喵喵影院" />
        <TabBar />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
export default {
    name: "Cinema",
    components: {
      Header,
      TabBar
    }
}
</script>