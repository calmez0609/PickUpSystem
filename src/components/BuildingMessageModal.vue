<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-xl" role="document" >
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增文件資訊</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row gx-3">
            <div class="mb-3 col-md-4" >
              <label for="certNumber" class="form-label">證書編號(必填)</label>
              <input type="text" class="form-control" id="certNumber" placeholder="請輸入證書編號"
                v-model="tempDataInfo.certNumber" @blur="checkDuplicateCertNumber"  :class="{'input-error': errors.certNumber, 'input-success': !errors.certNumber}" 
                :disabled="!isEmptyCertNumber"/>
              <br>
              <span id="error" v-if="errors.certNumber" >{{ errors.certNumber }}</span>
              <span id="success" v-if="success.certNumber" >{{ success.certNumber }}</span>
            </div>
            <div class="mb-3 col-md-4">
              <label for="assessmentNumber" class="form-label">評定書編號</label>
              <input type="text" class="form-control" id="assessmentNumber" placeholder="請輸入評定書編號"
                v-model="tempDataInfo.assessmentNumber">
            </div>
            <div class="mb-3 col-md-4">
            <label for="publicOrPrivate" class="form-label">公有 / 民間</label>
              <select type="text" class="form-control" :value=value id="publicOrPrivate" placeholder="請選擇公有 / 民間"
                v-model="tempDataInfo.publicOrPrivate">
                <option value="0">公有</option>
                <option value="1">民間</option>
              </select>
            </div>
          </div>
          <div class="row gx-3">
            <div class="mb-1 col-md-4">
              <label for="buildingName" class="form-label">建築物名稱</label>
              <input type="text" class="form-control" id="buildingName" placeholder="請輸入建築物名稱"
                v-model="tempDataInfo.buildingName">
            </div>
            <div class="mb-1 col-md-4">
              <label for="designer" class="form-label">建築物設計人</label>
              <input type="text" class="form-control" id="designer" placeholder="請輸入建築物設計人"
                v-model="tempDataInfo.designer">
              </div>
            <div class="mb-1 col-md-4">
              <label for="builder" class="form-label">起造人</label>
              <input type="text" class="form-control" id="builder" placeholder="請輸入起造人" v-model="tempDataInfo.owner">
            </div>
          </div>
          <div class="row gx-3">
           
            <div class="mb-3 col-md-4">
              
            </div>
          </div>
          <div class="row gx-3">
            <div class="mb-3 col-md-4">
              <label for="usageType" class="form-label">用途別</label>
              <input type="text" class="form-control" id="usageType" placeholder="請輸入用途別"
                v-model="tempDataInfo.usageType">
            </div>
            <div class="mb-3 col-md-4">
              <label for="applicableStandard" class="form-label">適用基準</label>
              <select type="text"  class="form-select" aria-label="請選擇標準" id="applicableStandard" placeholder="請選擇標準"
                v-model="tempDataInfo.applicableStandard">
                <option value="2011">2011</option>
                <option value="2016">2016</option>
              </select>
              
            </div>
            <div class="mb-3 col-md-4">
              <label for="level" class="form-label">等級</label>
              <select type="text" min="0" max="4" class="form-select" aria-label="請選擇等級" id="level" placeholder="請輸入等級"
                v-model="tempDataInfo.level">
       
                <option value="-1">免評定</option>
                <option value="0">合格級</option>
                <option value="1">銅級</option>
                <option value="2">銀級</option>
                <option value="3">黃金級</option>
                <option value="4">鑽石級</option>
              </select>
            </div>
          </div>
          <div class="row gx-3">
            <div class="mb-3 col-md-4">
              <label for="passCriteria" class="form-label">通過指標</label>
              <input type="text" class="form-control" id="passCriteria" placeholder="請輸入通過指標"
                v-model="tempDataInfo.passCriteria">
            </div>
            <div class="mb-3 col-md-4">
              <label for="indicatorCount" class="form-label">指標數</label>
              <input type="text" class="form-control" id="indicatorCount" placeholder="請輸入指標數"
                v-model="tempDataInfo.indicatorCount">
            </div>
            <div class="mb-3 col-md-4">
              <label for="location" class="form-label">建築地點</label>
              <input type="text" class="form-control" id="location" placeholder="請輸入建築地點" v-model="tempDataInfo.location">
            </div>
          </div>
          <div class="row gx-3">
            <div class="mb-3 col-md-4">
              <label for="totalFloorArea" class="form-label">總樓地板面積 (m2)</label>
              <input type="text" class="form-control" id="totalFloorArea" placeholder="請輸入總樓地板面積"
                v-model="tempDataInfo.totalFloorArea">
            </div>
            <div class="mb-3 col-md-4">
              <label for="constructionCost" class="form-label">工程造價(億元)</label>
              <input type="text" class="form-control" id="constructionCost" placeholder="請輸入工程造價"
                v-model="tempDataInfo.constructionCost">
            </div>
            <div class="mb-3 col-md-4">
              <label for="buildingSummary" class="form-label">建築物概要</label>
              <input type="text" class="form-control" id="buildingSummary" placeholder="請輸入建築物概要"
                v-model="tempDataInfo.buildingSummary">
            </div>
          </div>
          <div class="row gx-3">
            <div class="mb-1 col-md-4">
              <label for="unitCount" class="form-label">戶數</label>
              <input type="text" class="form-control" id="unitCount" placeholder="請輸入戶數" v-model="tempDataInfo.unitCount">
            </div>
            <div class="mb-1 col-md-4">
              <label for="projectType" class="form-label">工程類別</label>
              <input type="text" class="form-control" id="projectType" placeholder="請輸入工程類別"
                v-model="tempDataInfo.projectType">
            </div>
            <div class="mb-1 col-md-4">
              <label for="contractor" class="form-label">承辦人</label>
              <input type="text" class="form-control" id="contractor" placeholder="請輸入承辦人"
                v-model="tempDataInfo.contractor">
            </div>
          </div>
          <div class="row gx-3">
            <div class="mb-1 col-md-4">
              <label for="regulatoryRequirements" class="form-label">受法規要求</label>
              <input type="text" class="form-control" id="regulatoryRequirements" placeholder="請輸入受法規要求"
                v-model="tempDataInfo.regulatoryRequirements">
            </div>
            <div class="mb-1 col-md-4">
              <label for="bonusName" class="form-label">容積獎勵名稱</label>
              <input type="text" class="form-control" id="bonusName" placeholder="請輸入容積獎勵名稱"
                v-model="tempDataInfo.bonusName">
            </div>
            <div class="mb-1 col-md-4">
              <label for="bonusVolume" class="form-label">容積獎勵</label>
              <input type="text" class="form-control" id="bonusVolume" placeholder="請輸入容積獎勵"
                v-model="tempDataInfo.bonusVolume">
            </div>
          </div>
          <div class="row gx-3">
            <div class="mb-1 col-md-4" v-if=!isCIB>
              <label for="candidateCertNumber" class="form-label">候選證書編號</label>
              <input type="text" class="form-control" id="candidateCertNumber" placeholder="請輸入候選證書編號"
                v-model="tempDataInfo.candidateCertNumber">
            </div>
            <div class="mb-1 col-md-4">
              <label for="administrativeDistrict" class="form-label">所屬行政區(xml)</label>
              <input type="text" class="form-control" id="administrativeDistrict" placeholder="請輸入所屬行政區"
                v-model="tempDataInfo.administrativeDistrict">
            </div>
            <div class="mb-1 col-md-4">
              <label for="ownerAddress" class="form-label">起造人地址(XML)</label>
              <input type="text" class="form-control" id="ownerAddress" placeholder="請輸入起造人地址"
                v-model="tempDataInfo.ownerAddress">
              </div>
          </div>
          <div class="row gx-3">
            
            
              <div class="mb-1 col-md-4">
              <label for="designer_address" class="form-label">設計人地址</label>
              <input type="text" class="form-control" id="designer_address" placeholder="請輸入地址"
                v-model="tempDataInfo.designer_address">
            </div>
              <div class="mb-1 col-md-4">
              <label for="plateNumber" class="form-label">門牌(xml)</label>
              <input type="text" class="form-control" id="plateNumber" placeholder="請輸入門牌"
                v-model="tempDataInfo.address">
            </div>
        </div>
          <hr>
          <div class="mb-3">
            <div class="form-check">
              <span v-if="errors.certNumber" class="error">{{ errors.certNumber }}</span>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div>
              <button type="button" class="btn btn-primary me-2" @click="cleanData">
                清除欄位
              </button>
              <button type="button" class="btn btn-primary me-2" @click="recoverData" :disabled="!canRecoverData">
                回復資料
              </button>
            </div>
            <div>
              <button type="button" class="btn btn-primary me-2" :disabled=" !canCreated " @click="delay">
                確認
              </button>
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<style>
.input-error {
  /* 自訂錯誤時的樣式 */
  border: 2px solid red;
}

.input-success {
  /* 自訂成功時的樣式 */
  border: 2px solid green;
}
</style>

<script>
import modalMixin from '@/mixins/modalMixin';


export default {
  mixins: [modalMixin],
  
  props: {
    data: Object,
    isEmptyCertNumber: Boolean,
    // 其他已存在的 props 屬性...
  },
  watch: {
    data() {
      if (this.data) {
        this.tempDataInfo = {}
        this.tempDataInfo = {...this.data}
      }
      this.tempDataInfo = {
      certNumber: this.tempDataInfo.ID,
      assessmentNumber: this.tempDataInfo.Assessment_ID,
      buildingName: this.tempDataInfo.building_name,
      designer: this.tempDataInfo.designer,
      owner: this.tempDataInfo.applicane,
      usageType : this.tempDataInfo.class,
      publicOrPrivate: this.tempDataInfo.governmental,
      applicableStandard: this.tempDataInfo.version,
      level: this.tempDataInfo.LEVEL,
      passCriteria: this.tempDataInfo.project_name,
      indicatorCount: this.tempDataInfo.project_num,
      location: this.tempDataInfo.building_local,
      totalFloorArea: this.tempDataInfo.building_area,
      constructionCost: this.tempDataInfo.cost_of_building,
      buildingSummary: this.tempDataInfo.building_summary,
      unitCount: this.tempDataInfo.household_num,
      status: this.tempDataInfo.status,
      contractor: this.tempDataInfo.taker,
      regulatoryRequirements: this.tempDataInfo.regulations,
      bonusName: this.tempDataInfo.regulations_of_bulk_reward,
      bonusVolume: this.tempDataInfo.reward_range,
      candidateCertNumber: this.tempDataInfo.candidate_ID,
      administrativeDistrict : this.tempDataInfo.administrativeDistrict,
      designer_address : this.tempDataInfo.designer_address,
      ownerAddress : this.tempDataInfo.owner_address,
      address : this.tempDataInfo.address,
   };
    },
    'tempDataInfo.publicOrPrivate': function (newVal, oldVal) {

      // 在這裡可以執行相關的處理邏輯
    },
    'tempDataInfo.certNumber': function (newVal, oldVal) {
      if (this.tempDataInfo.certNumber) {
        if (this.tempDataInfo.certNumber.includes('CIB')) {
          this.isCIB = true
        } else {
          this.isCIB = false
        }
      }

      this.validateCertNumber();
    }
  },
  data() {
    return {
      disabled: false,
      timeout: null,
      isNew :'',
      modal: {},
      tempDataInfo: { certNumber: "" },
      errors: {},
      success:{},
      canCreated: false,
      isUpdate : false,
      isCIB: false,
      eraseData: {}
    };
  },
  methods: {  
    cleanData() {
      this.eraseData = { ...this.tempDataInfo };
      this.tempDataInfo = {};
    },
    recoverData() {
      this.tempDataInfo = { ...this.eraseData };
      this.eraseData = {};
    },
    checkEraseData() {
      return Object.keys(this.eraseData).length > 0;
    },
    async checkDuplicateCertNumber(certNumber) {
      try {
        const response = await this.$http.get(`${process.env.VUE_APP_API}/select/checkDuplicateCertNumber`, { params: { certNumber } });
        return response.data;
      } catch (error) {
        return false;
      }
    },
    async delay() {
      this.disabled = true;
      // Re-enable after 5 seconds
      this.timeout = setTimeout(() => {
        this.disabled = false;
      }, 5000);
      await this.myFunction();
      this.isUpdate = false
      this.hideModal()
    },
    async myFunction() {
      const isValid = await this.validateCertNumber();
      if (isValid) {
        this.$emit('update-data-info', this.tempDataInfo);
      }
    },
    async validateCertNumber() {
      const certNumber = this.tempDataInfo.certNumber;
      if (!certNumber) {
        this.errors.certNumber = '請輸入證書編號';
        this.success.certNumber = ''
        return false;
      }
      const isDuplicate = await this.checkDuplicateCertNumber(certNumber);
      const isValid = certNumber.includes('CIB') || certNumber.includes('IB')
      this.isNew = this.isEmptyCertNumber
      console.log(isValid)
      console.log*(isDuplicate)
      if (isDuplicate && this.isNew ) {
        this.errors.certNumber = '證書編號已存在';
        this.canCreated = false
        this.success.certNumber = ''
        return false;
      }
      else if (isDuplicate && !this.isNew && isValid) {
        this.errors.certNumber = '';
        this.success.certNumber = '您現在正更改資料中(證書編號無法更動)'
        this.canCreated = true
        return true;
      }
      else {
        if (!isValid) {
          this.errors.certNumber = '證書編號不合規定';  
          this.canCreated = false
          this.success.certNumber = ''
          return false;
        }
        this.errors.certNumber = ''
        this.success.certNumber = ''
        this.success.certNumber = '可以使用這個編號';
        this.canCreated = true
        return true;
      }
    },
  }, computed: {
    canRecoverData() {
      return Object.keys(this.eraseData).length > 0;
    },
  },
  created() {
    this.tempDataInfo = this.data

   
  },
  mounted() {
    // 在适当的时机更新 eraseData 的值
    this.eraseData = this.checkEraseData();
  },
  unmounted() {



    this.success.certNumber = ''
    this.errors.certNumber = ''
  }
};
</script>