<template>
    <h1>ยินดีต้อนรับสู่ร้านค้าประจำเกษตรศาสตร์ศรีราชา</h1>
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
    // เริ่มทำงานเมื่อเกิดการ mount Component
    onMounted(async ()=>{
        await axios.get(`http://localhost:3000/products/three`)
        .then((res)=>{
            products.value=res.data
        })
        .catch(err=>console.log(err.message))
    })
</script>

<style></style>