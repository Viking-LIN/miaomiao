<template>
    <header id="Header">
        <div class="back"><div class="navbar"> xxx</div></div>
        <img src="@/assets/background.png">
    </header>

</template>

<script>
export default {
    name:"Header"
}
</script>

<style >
    *{
        padding: 0;
        margin: 0;
    }
    header{
        width:100%;
        display: flex;
       justify-content: center;
        overflow: hidden;
    }
    .back{
        position: absolute;
        left: 0;
        top:0;
        height: 42px;
        width:100%;
        color: black;
        background-image: url('../../assets/background.png');
        background-position: center -10px;
        background-repeat: no-repeat;
        filter: blur(4px);
        box-shadow: 0 1px 2px rgba(0,0,0,1);
   
    }
    .navbar{
        width: 100%;
        height: 100%;
         background: white;
         opacity: 0.5;
      box-shadow: 0 1px 2px rgba(0,0,0,.1);

    }

</style>
