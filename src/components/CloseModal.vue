<template>
    <div class="modal fade" id="closeModal" tabindex="-1" aria-labelledby="closeModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="closeModalLabel">關閉視窗</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            確定要關閉視窗嗎？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="closeModal">確定</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {

    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  