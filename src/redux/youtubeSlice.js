// 비동기 데이터 fetching 함수 등록
// 비동기 데이터의 상태에 따라서 자동으로 해당 데이터를 변경할 수 있는 리듀서라는 함수를 등록

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 비동기 서버통신으로 데이터를 전달받아서 내부적으로
// action 타입을 자동 생성해서 액션 객체 생성까지 완료하는 함수
export const fetchYoutube = createAsyncThunk('youtube/request', async () => {
	const api_key = 'AIzaSyDahiuuGjqriZa9DGdl1wIGj_Qi7FmApCE';
	const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	const pid = 'PLzWf7Qld-pIvOABZiY6uudaX3a3A61wgB';
	const num = 4;
	const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

	const result = await axios.get(resultURL);
	return result.data.item;
});

// 리덕스에서 전역상태 관리에 쓰이는 용어정리
/*
  store : 전역 state 저장공간 (은행금고)
  reducer : store 의 전역 state 값을 변경해주는 함수 (변형자) (금고관리인, 은행지점장)
  disptch : reducer 에 데이터 변경요청을 해주는 함수 (전달자) (창구직원)
  action : dispatch 로 리듀서에 데이터 변경요청을 위해 필요한 특별한 형태의 객체 (창구직원에게 전달할 지로용지)
  action 객체의 구조 {type, payload}

  1. 컴포넌트에서 데이터 변경이나 데이터 요청을 위한 action 객체를 만들어서 dispatch 함수에 전달
  2. dispatch 는 action 객체를 가지고 리듀서 함수에 전달
  3. reducer 함수는 dispatch 가 전달되는 action 객체의 타입에 따라 store 의 데이터 변경처리 
  4. 변경 store 데이터는 index.js 에 의해서 App.js 에 전달됨
  5. 루트 컴포넌트인 App.js 에 데이터가 전달되었기 때문에 자식 컴포넌트 어디에서는 해당 데이터에 접근 가능
*/