<template>
  <el-upload action="#" :before-upload="handleUpload" list-type="picture-card" :auto-upload="false">
    <el-icon>
      <Plus/>
    </el-icon>

    <template #file="{ file }">
      <div>
        <div v-if="file.url">
          <img class="el-upload-list__item-thumbnail" :src="file.url" @error="file.url = ''"
               alt=""/>
        </div>
        <div v-else>
          {{ getExtension(file.name).toUpperCase() }}
        </div>
        <span class="el-upload-list__item-actions">
          <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in/></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
          >
            <el-icon><Download/></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
          >
            <el-icon><Delete/></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image"/>
  </el-dialog>
</template>

<script lang="ts" setup>
import {ref, defineProps, defineEmits} from 'vue'
import {Delete, Download, Plus, ZoomIn} from '@element-plus/icons-vue'

// Define props and emits
import type {UploadFile} from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}
// Modify handleUpload
const handleUpload = async (file: File) => {
  // ... Existing upload logic
  const {modelValue} = defineProps(['modelValue']);
  const emit = defineEmits();

  const uploadedUrl = await uploadFileToS3(file); // Assume this function uploads the file and returns URL
  emit('update:modelValue', uploadedUrl); // Update the bound form field
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

const getExtension = (filename: string) => {
  return filename.split('.').pop();
}

</script>
