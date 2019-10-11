<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li
                        v-for="(item, index) in hotList"
                        :key="index"
                        @click="choiceCity(item.id)">
                        {{item.nm}}
                    </li>
                </ul>
            </div>
            <div class="city_sort">
                <div v-for="(item, index) in cityList"
                    :key="index"
                    :ref="item.index">
                    <h2>{{item.index}}</h2>
                    <ul>
                        <li v-for="city in item.list"
                            :key="city.id"
                            @click="choiceCity(city.id)">
                            {{city.nm}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="item in cityList"
                    :key="item.index"
                    @click="choiceFirstLetter(item.index)">
                    {{item.index}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "City",
    data(){
        return{
            cityList: [],
            hotList: []
        }
    }, 
    methods: {
        formatCityList(cities){
            let cityList = [];
            let hotList = [];

            for(let i of cities){
                let firstLetter = i.py.substring(0, 1).toUpperCase();
                if(toCom(firstLetter)){       //新添加索引
                    cityList.push({index: firstLetter, list: [{nm : i.nm, id : i.id} ]});
                }else{                        //累加索引  
                    for(let j of cityList){
                        if(j.index === firstLetter){
                            j.list.push({nm : i.nm, id : i.id});
                        }
                    }
                }
                if(i.isHot === 1){
                    hotList.push({nm : i.nm, id : i.id});
                }
            }

            cityList.sort((n1, n2) => {
                if(n1.index > n2.index){
                    return 1;
                }
                else if(n1.index <  n2.index){
                    return -1;
                }
                else{
                    return 0;
                }
            });

            hotList.sort((n1, n2) => {
                if(n1.index > n2.index){
                    return 1;
                }
                else if(n1.index <  n2.index){
                    return -1;
                }
                else{
                    return 0;
                }
            });
            
            return { cityList , hotList}
            // this.cityList = cityList;
            // this.hotList = hotList;

            function toCom(firstLetter){
                for(let i of cityList){
                    if(i.index === firstLetter){
                        return false;
                    }
                }
                return true;
            }

        },
        choiceCity(id){
            console.log(id)
        },
        choiceFirstLetter(index){
            this.$refs[index][0].scrollIntoView()
        }
    },
    mounted () {
        this.$axios.get('/api/cityList').then((res) => {
            let msg = res.data.msg;
            if(msg === 'ok'){
                let data = res.data.data.cities;
                let { cityList, hotList } = this.formatCityList(data)
                this.cityList = cityList;
                this.hotList = hotList;
            }
        });
    }
}
</script>

<style lang="scss" scoped>
#content {
    .city_body {
        margin-top: 45px;
        display: flex;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
    }
}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{   margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}

</style>