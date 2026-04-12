<template >
    <div class="min-h-screen bg-[url('/images/shelterbg.png')] bg-cover bg-center p-10">
        <Header />

        <div class="profile-itself  w-475 h-250 rounded-[40px]" > <!-- с соотношением сторон еще определдимся пока все неоч -->
            <div class="avatar bg-red-900 rounded-full justify-self-center self-center ">
<img src="/images/paw.png" class="justify-self-center self-center">
            </div>
            <div class="name   rounded-[40px]  p-2 flex flex-col justify-between h-screen">
<div class="imya"><h1 class=" named text-9xl ">ИМЯ</h1></div>
<div class="izbrannoe"><h1 class=" named text-4xl">ИЗБРАННОЕ</h1></div>
            </div>


            <div class="info   rounded-[40px]">
                <div class="description bg-white rounded-[40px] justify-self-center self-center p-5 break-words">
    Здесь будет описание питомца. Оно может
     быть длинным и занимать несколько строк.  

                </div>
                <div class="featured   rounded-[40px] ">
                    <div class="f-1 f-item bg-white rounded-[40px] p-5"><h1 class="urls   justify-self-center self-center">randomlink.url/eeeeeeeee/e/333/3/3</h1></div>
                    <div class="f-2 f-item bg-white rounded-[40px] p-5"><h1 class="urls   justify-self-center self-center">randomlink.url/eeeeeeeee/e/333/3/3</h1></div>
                    <div class="f-3 f-item bg-white rounded-[40px] p-5"><h1 class="urls   justify-self-center self-center">randomlink.url/eeeeeeeee/e/333/3/3</h1></div>
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
padding: 10px;
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

.avatar{
    width: 50%; 
    height: 100%;
    align-content: center;
}

.description{
    width: 50%;
    height: 100%;
}

.name{ 
    height: 100%;

}

.named{
    color: white;
    font-weight: 900;
  font-family: 'Montserrat', bold; 

}

.urls{
     font-weight: 900;
  font-family: 'Montserrat', bold; 
}
</style>

<script setup>
import Header from '../components/Header.vue'
</script>
