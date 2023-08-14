<template>
  <main class="movie">
    <form @submit.prevent="search">
      <fieldset>
        <legend>
          영화 검색하기
        </legend>
        <div>
          <input v-model="state.inputValue" type="text" placeholder="영화제목을 검색해주세요" size="30" autofocus>
          <button type="submit">검색</button>
        </div>
      </fieldset>
    </form>

    <section>
      <template v-if="state.results.length === 0">
        데이터를 불러오는 중입니다.
      </template>

      <ul v-else>
        <li v-for="(movie) in state.results" :key="movie.imdbID" @click="selectItem(movie.imdbID)">
          <div class="thumbnail">
            <img :src="movie.Poster" alt="영화 이미지" />
          </div>
          <h3>{{ movie.Title }}</h3>
          <p>개봉 : {{ movie.Year }}</p>
          <span>{{ movie.Type }}</span>
        </li>
      </ul>
    </section>

    <div class="Modal" v-if="state.selectedItem" @click="closeModal">
      <div class="movie-detail">
        <div class="thumbnail">
          <img :src="state.selectedItem.Poster.replace('SX300','SX700')" alt="영화 이미지" />
        </div>
        <h3>{{ state.selectedItem.Title }}</h3>
        <p> <strong>Year : </strong> {{ state.selectedItem.Year }}</p>
        <p> <strong>Actors : </strong> {{ state.selectedItem.Actors }}</p>
        <p> <strong>Awards : </strong> {{ state.selectedItem.Awards }}</p>
        <p> <strong>BoxOffice : </strong> {{ state.selectedItem.BoxOffice }}</p>
        <p> <strong>Director : </strong> {{ state.selectedItem.Director }}</p>
        <p> <strong>Genre : </strong> {{ state.selectedItem.Genre }}</p>
        <p> <strong>Production : </strong> {{ state.selectedItem.Production }}</p>
      </div>
    </div>


    <div class="Modal" v-if="state.loading">
      <div class="content">
        <img width=300 src="https://cdn.roto.codes/images/nyan-cat.gif" alt="Loading..." />
      </div>
    </div>

  </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';


interface ResponseValue {
  Search: MovieItem[]
  totalResults: string
  Response: string
}
interface MovieItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface MovieDetailItem {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

type State = {
  results: MovieItem[],
  total: number,
  inputValue: "sting",
  selectedItem: MovieDetailItem | null,
  loading: boolean
}

const state = reactive<State>({
  results: [],
  total: 0,
  inputValue: "titanic",
  selectedItem: null,
  loading: false
})

function search() {
  state.results = []
  state.total = 0
  fetch(`/api?s=${state.inputValue}`)
    .then((res) => res.json())
    .then((data: ResponseValue) => {
      state.results = data.Search
      state.total = Number(data.totalResults)
    })
}

function selectItem(id: string) {
  state.loading = true
  fetch(`/api?i=${id}&plot=full`)
    .then((res) => res.json())
    .then((data: MovieDetailItem) => {
      state.loading = false
      state.selectedItem = data
    })
}

function closeModal() {
  state.selectedItem = null
}
</script>

<style lang="scss">
.movie {

  fieldset {
    border: 0;
    padding: 0;
    margin-bottom: 30px;

    legend {
      font-size: 40px;
      padding-bottom: 15px;
      letter-spacing: -1px;
    }

    div {
      display: flex;
      gap: 10px;
    }

    input {
      height: 40px;
      font-size: 30px;
      letter-spacing: -1px;
      font-weight: 100;
      color: #444;
      width: 50%;
      padding: 0 10px;
      border: 1px solid #999;
      border-radius: 5px;
    }

    button {
      background-color: #fff;
      border: none;
      color: #09F;
      font-size: 19px;
      letter-spacing: -1px;
      padding: 0 40px;
      font-weight: 400;
      transition: 0.3s;
      border: 1px solid #09f;
      border-radius: 5px;

      &:hover {
        background-color: #09F;
        color: #FFF;
      }

    }
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    background-color: #EAEAEA;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;

    .thumbnail {
      width: 100%;
      padding-top: 143%;
      position: relative;
    }

    li {
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(#666, 0.3);
      overflow: hidden;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-bottom: 10px;
    }

    h3,
    p,
    span {
      padding: 0 5px;
      font-size: 14px;
      line-height: 1;
      margin: 0;

    }

    span {
      font-size: 12px;
      color: #aaa;
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &-detail {
    background-color: #fff;
    padding: 30px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(#666, 0.3);
    overflow: hidden;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
     
    .thumbnail {
      width: 100%;
      padding-top: 143%;
      position: relative;
    }

    li {
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(#666, 0.3);
      overflow: hidden;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-bottom: 10px;
    }

    h3,
    p,
    span {
      padding: 0 5px;
      font-size: 14px;
      line-height: 1;
      margin: 0;

    }

    span {
      font-size: 12px;
      color: #aaa;
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      object-fit: cover;
      border-radius: 10px;
    }
  }
}

.Modal {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.Modal>div {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>