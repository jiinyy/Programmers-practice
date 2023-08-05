<template>
  <div class="App">
    <header class="Breadcrumb">
      <div v-for="(e, index) in state.path" :key=e.id @click="선택한폴더로_이동해줘(e, index)">
        {{ e.name }}
      </div>
    </header>

    <div class="Nodes">
      <div class="Node Backspace" v-if="state.path.length > 1" @click="뒤로가기">
        <img src="https://cdn.roto.codes/images/prev.png" />
      </div>

      <div class='Node' v-for="e in state.photos" :key=e.id @click="handleClickNode(e)">
        <img :src="e.type === 'DIRECTORY' ? `${cdnUrl}/images/directory.png` : `${cdnUrl}/images/file.png`" />
        {{ e.name }}
      </div>
    </div>


    <div class="Modal" v-if="state.selectedImage" @click="모달닫기">
      <img :src="`https://kdt-frontend.cat-api.programmers.co.kr/static${state.selectedImage.filePath}`" alt="고양이사진" />
    </div>

    <div class="Modal" v-if="state.loading">
      <div class="content">
        <img width=300 src="https://cdn.roto.codes/images/nyan-cat.gif" alt="Loading..." />
      </div>
    </div>

  </div>
</template>


<script setup>
import { reactive, onMounted, onUnmounted } from 'vue';

const state = reactive({
  selectedImage: null,
  path: [
    {
      name: "root",
      id: 0,
    },
  ],
  photos: [],
  loading: false,
});

const apiUrl = "https://kdt-frontend.cat-api.programmers.co.kr";
const cdnUrl = "https://cdn.roto.codes";

function 사진가져와줘() {
  return fetch(`${apiUrl}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

function 폴더에대한_사진가져와줘(id) {
  if (id == 0) return 사진가져와줘();
  return fetch(`${apiUrl}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

function 선택한폴더로_이동해줘(selectedPath, selectedIndex) {
  state.path = state.path.slice(0, selectedIndex + 1)
  사진_가져와_그려줘(selectedPath.id)
}

function 뒤로가기() {
  if (state.path.length > 1) {
    사진_가져와_그려줘(state.path.pop().parent?.id)
  }
}

function handleClickNode(photo) {
  if (photo.type == "DIRECTORY") {
    state.path.push(photo);
    사진_가져와_그려줘(photo.id);
  }
  if (photo.type == "FILE") {
    state.selectedImage = photo;
  }
}

const 모달닫기 = () => {
  state.selectedImage = null;
};

async function 사진_가져와_그려줘(id = 0) {
  state.photos = [];
  state.loading = true;

  state.photos = await 폴더에대한_사진가져와줘(id);
  state.loading = false;
}
사진_가져와_그려줘()


function 백스페이스_누르면_뒤로가줘(e) {
  if (!state.loading && e.key === "Backspace") {
    모달닫기()
    뒤로가기()
  }
}
function ESC누르면_모달꺼줘(e) {
  if (e.key === "Escape") {
    모달닫기()
  }
}

onMounted(() => {
  window.addEventListener("keydown", 백스페이스_누르면_뒤로가줘)
  window.addEventListener("keydown", ESC누르면_모달꺼줘)
})

onUnmounted(() => {
  window.removeEventListener("keydown", 백스페이스_누르면_뒤로가줘)
  window.removeEventListener("keydown", ESC누르면_모달꺼줘)
})

</script>