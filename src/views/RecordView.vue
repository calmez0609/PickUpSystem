<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <SearchData @search="searchData" :value="searchCondition"></SearchData>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <span>搜尋條件：</span>
          <select class="form-select" v-model="searchCondition" style="width:300px" :key="searchCondition">
            <option value="ID">ID</option>
            <option value="building_name">建案名稱</option>
            <option value="applicane">單位</option>
            <option value="designer">建築物設計者</option>
          </select>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-primary" @click.prevent="openModal(true, tempDataInfo)">增加一個新的資料</button>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">{{name}}</th>
          <th width="120">建案名稱</th>
          <th width="120">建造單位</th>
          <th width="120">建築物設計者</th>
          <th width="100">建築概要</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.ID">
          <td>{{ item.ID }}</td>
          <td>{{ item.building_name }}</td>
          <td>{{ item.applicane }}</td>
          <td>{{ item.designer }}</td>
          <td>{{ item.building_summary }}</td>
          <td>
            <div class="btn-group">
              <ExportWordButton @click="getAllData(item)" :item="building_AllData" />
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <button type="button" class="btn btn-outline-success" @click="openModal(false, item)">編輯</button>
            &nbsp;&nbsp;
            <button type="button" class="btn btn-outline-primary" @click="openXmlBuilderModal(item)">匯出公文</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :current-page="currentPage" :total-pages="totalPages" @update-page="updatePage" />

    
  </div>
</template>

<script>
import SearchData from '@/components/SearchData.vue'

export default {
  data() {
    return {
		name: "ID"
    };
  },
  components: {
     SearchData
     }
  }
  
</script>
