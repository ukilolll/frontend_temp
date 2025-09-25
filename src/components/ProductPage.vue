<template>
   <!-- ส่วนแสดงผล -->
    <div class="row">
        <div v-for="(pd,pdId) in products" :key="pdId" class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mt-3" style="width: 18rem;background-color: #EEEEEE;">
               <img :src="`http://localhost:3000/img_pd/${pd.pdId}.jpg`" class="card-img-top p-2"  lt="">
                <div class="card-body">
                    <h5 class="card-title">{{ pd.pdName }}</h5>
                    <p class="card-text">{{ pd.brand?.brandName || "ไม่ระบุยี่ห้อ"}} - {{ pd.pdPrice }}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    <!-- กำหนด router-link แสดง Component ProductShow -->
                    <!-- จะมีการส่งParameter ไปกับ router-link ด้วยจะต้องใช้ :to และกำหนด params -->
                    <!-- และส่งเป็นลักษณะชุดข้อมูล key:value -->
                    <!-- สามารถส่ง parameter ได้หลายตัวโดยระบุเป็นชุดข้อมูลซ้อนเข้าไปได้ -->
                    <router-link :to="{name:'ProductShow',params:{pdId:pd.pdId} }"
                        style="text-decoration: none;">
                        <div  class="btn btn-primary">ดูรายละเอียด</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'; // import function ref มาจาก vue   

const products = ref([]);

onMounted(async ()=>{
        // await fetch(http://localhost:4000/products) //ระบุ endpoint ดึงข้อมูลจาก Backend
        // .then(res=>res.json()) //ได้ค่า res ใช้ res เป็นParameter เรียก fn. แปลงเป็น JSON format
        // .then(data=>products.value=data) //ได้ data ใช้ data เป็นParameter กำหนดค่าให้ products
        // .catch(err=>console.log(err.message)) //ถ้าผิดพลาดแสดง err

        await axios.get(`http://localhost:3000/products`)
        .then((res=>{
            products.value=res.data;
            console.log(res.data);
        }))
        .catch(err=>console.log(err.message))
})

// {
//         "pdId": "002",
//         "pdName": "Product2",
//         "pdPrice": 2000,
//         "pdRemark": null,
//         "pdTypeId": "T01",
//         "brandId": "B03",
//         "brand": {
//             "brandId": "B03",
//             "brandName": "Brand C"
//         },
//         "pdt": {
//             "pdTypeId": "T01",
//             "pdTypeName": "สินค้าชนิดที่1"
//         },
//         "pdImg":"https://4kwallpapers.com/images/walls/thumbs_3t/23517.jpg"
//     },
//     {
//         "pdId": "003",
//         "pdName": "Product3",
//         "pdPrice": 3000,
//         "pdRemark": null,
//         "pdTypeId": "T01",
//         "brandId": "B03",
//         "brand": {
//             "brandId": "B03",
//             "brandName": "Brand C"
//         },
//         "pdt": {
//             "pdTypeId": "T01",
//             "pdTypeName": "สินค้าชนิดที่1"
//         },
//         "pdImg":"https://4kwallpapers.com/images/walls/thumbs_3t/22957.jpg"
//     }
</script>

<style  scoped>
.card{
    margin: 20px;
    
}
.box{
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 20px;
}

</style>