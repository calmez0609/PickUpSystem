
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #FFC0CB;">
      <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../assets/bunny.jpg" height="30" alt="">接送系統</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/CarView" class="nav-link"><b>預覽畫面</b></router-link>
          <router-link to="/RegisterView" class="nav-link">註冊使用者</router-link>
          <router-link to="/RecordView" class="nav-link">調閱紀錄</router-link>
          
        </div>
      </div>
    </div>
  </nav>
</template> 
<script>

export default {
    methods : {
        
        }
    }

</script>
