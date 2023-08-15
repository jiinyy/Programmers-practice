<template>
  <div class="App">

    <header class="Breadcrumb">
      <div v-for="(path, index) in state.paths" :key="path.id" @click="선택한폴더로_이동해줘(path, index)">
        {{ path.name }}
      </div>
    </header>


    <div class="Nodes">
      <div class="Node Backspace" v-if="state.paths.length > 1" @click="뒤로가기">
        <img src="https://cdn.roto.codes/images/prev.png" />
      </div>

      <div class="Node" v-for=" photo in  state.photos " :key="photo.id" @click="handleClickNode(photo)">  <!-- //이런거 e로 그냥 임의로 써도되나요? -->
        <img :src="photo.type == 'DIRECTORY' ? `${cdnUrl}/images/directory.png` : `${cdnUrl}/images/file.png`" />
        <p>{{photo.name}}</p>
      </div>

      <div class="Modal" v-if="state.selectedImage" @click="모달닫기">
        <img :src="`https://kdt-frontend.cat-api.programmers.co.kr/static${state.selectedImage.filePath}`" alt="고양이사진" />  <!--// `` 로 감싸준 이유는?-->
      </div>
    </div>



    <div class="Modal" v-if="state.loading">
      <div class="content">
        <img width="300" src="https://cdn.roto.codes/images/nyan-cat.gif" alt="Loading..." />  <!--// 여기는 src 앞에 : 안하는 이유가 뭔가요?-->
      </div>
    </div>

  </div>
</template>

<script setup>  //setup 은 뭔가요?
import { reactive, onMounted, onUnmounted } from 'vue';
const apiUrl = "https://kdt-frontend.cat-api.programmers.co.kr";
const cdnUrl = "https://cdn.roto.codes";
const state = reactive({
  paths: [{
    id: 0,
    name: "root"
  }],
  photos: [],
  selectedImage: null,
  loading: false
})

function 사진가져와줘() {
  return fetch(`${apiUrl}`, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
}

function 폴더에대한_사진가져와줘(id) {
  if (id == 0) return 사진가져와줘()
  return fetch(`${apiUrl}/${id}`, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
}

function handleClickNode(photo) {
  if (photo.type == "DIRECTORY") {
    state.paths.push(photo)
    사진_데이터_갱신(photo.id)
  }
  if (photo.type == "FILE") {
    state.selectedImage = photo
    // 여기서 photo 를 가져온 이유는..? 사진첩그려줘()만 지운이유는? 사진가져와그려줘(photo.id) 인 이유는?
  }
}

function 선택한폴더로_이동해줘(selectedPath, selectedIndex) {
  state.paths = state.paths.slice(0, selectedIndex + 1)
  사진_데이터_갱신(selectedPath.id)
}

const 모달닫기 = () => {
  state.selectedImage = null
}

function 뒤로가기() {
  if (state.paths.length > 1) {
    사진_데이터_갱신(state.paths.pop().parent?.id)
  }
}

async function 사진_데이터_갱신(id = 0) {
  state.photos = []
  state.loading = true;

  state.photos = await 폴더에대한_사진가져와줘(id)
  state.loading = false;
} // 여기서는 사진첩그려줘() , 사진_데이터_갱신() 다 삭제한이유는..?

function 백스페이스누르면_뒤로가줘(e) {
  if (!state.loading && e.key === "Backspace") {
    모달닫기()
    뒤로가기()
  }
}

function Escape누르먼_뒤로가줘(e) {
  if (e.key === "Escape") {
    모달닫기()
  }
}

모달닫기();  // 여기에만 사진가져와그려줘 추가한 이유..?

window.addEventListener("keydown", 백스페이스누르면_뒤로가줘)
window.addEventListener("keydown", Escape누르먼_뒤로가줘)

</script>