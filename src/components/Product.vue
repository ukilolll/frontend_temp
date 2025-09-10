<template>
    <!-- vue.js form ถ้าไม่กำหนด @submit.prevent จะทำการเปลี่ยนหน้าเมือ submit -->
    <form @submit.prevent="searchProduct()">
        <div class="row">
            <div class="h1 col-md-6 col-sm-12text-danger">ผลิตภันฑ์ของเรา</div>
            <div class="col-md-4 col-sm-6">
                <input type="text" class="form-control" v-model="stext">
            </div>
            <div class="col">
                <button class="btn btn-primary" type="submit" @click="searchProduct()">ค้นหา</button>
            </div>
        </div>
    </form>
    <!-- ส่วนแสดงผล -->
    <div class="row">

        <div v-for="pd in products" :key="pd.pdId" class="col-lg-4 col-md-6 col-sm-12">
            <div class="card" style="width: 18rem;">
                <img :src="`http://localhost:3000/img_pd/${pd.pdId}.jpg`" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{ pd.pdName }}</h5>
                    <p class="card-text">{{ pd.brand.brandName }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'; // import function ref มาจาก vue  
    import axios from 'axios'; 
    const products=ref([]) // ประกาศตัวแปร แบบ Composition API ใช้ function ref()
    const stext = ref("")

    // เริ่มทำงานเมื่อเกิดการ mount Component
    onMounted(async ()=>{
        // await fetch(`http://localhost:3000/products`) //ระบุ endpoint ดึงข้อมูลจาก Backend
        // .then(res=>res.json()) //ได้ค่า res ใช้ res เป็นParameter เรียก fn. แปลงเป็น JSON format
        // .then(data=>products.value=data) //ได้ data ใช้ data เป็นParameter กำหนดค่าให้ products
        // .catch(err=>console.log(err.message)) //ถ้าผิดพลาดแสดง err
        await axios.get(`http://localhost:3000/products`)
        .then((res)=>{
            console.log(res.data)
            products.value=res.data
        })
        .catch(err=>console.log(err.message))
    })
</script>

<style></style>