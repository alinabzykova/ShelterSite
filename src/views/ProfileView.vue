<template >
    <div class="min-h-screen bg-[url('/images/shelterbg.png')] bg-cover bg-center p-10">
        <Header />

        <div class="profile-itself bg-amber-700 w-480 h-250 rounded-[40px]" > <!-- с соотношением сторон еще определдимся пока все неоч -->
            <div class="avatar bg-amber-200 rounded-[1000px]">

            </div>
            <div class="name bg-amber-500 rounded-[40px]">

            </div>


            <div class="info bg-amber-600 rounded-[40px]">
                <div class="description bg-amber-950 rounded-[40px]"></div>
                <div class="featured bg-amber-300 rounded-[40px]">
                    <div class="f-1 f-item bg-amber-100 rounded-[40px]"></div>
                    <div class="f-2 f-item bg-amber-100 rounded-[40px]"></div>
                    <div class="f-3 f-item bg-amber-100 rounded-[40px]"></div>
                </div>
            </div>
        </div>
        
        
        
        
         </div>
</template>

<style scoped>
.profile-itself{
    display: grid;
grid-gap: 10px;
    grid-template-columns: 1fr 1fr ;
grid-template-rows: 1fr 1fr ;
}

.info{
    display: grid;
grid-gap: 10px;
    grid-template-columns: 1fr 1fr ;
 grid-column: span 2;
}
.featured{
    display: grid;
grid-gap: 10px;

}
</style>

<script setup>
import Header from '../components/Header.vue'
</script>
