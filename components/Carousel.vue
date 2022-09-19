<script setup lang="ts">
// テスト用
import { ref } from 'vue'
import { useLanguage } from '@/store/language'

type Obj = {
    test: string,
    weight: number,
    aaa: Boolean
    dist?: number
}
type Object = {
    array: string[],
    obj: Obj
}
const dummy:Object = {
    array: ['test'],
    obj:{
        test:'111',
        weight: 2,
        aaa: false
    }
}

const weak = new WeakMap()
const d = {a:'自身'}
const e = {a:'犬'}
weak.set(d,'テスト');
weak.set(e,'テストあ');
console.log(weak.get(e));

let inputValue = ref('');

const {obj:{dist=500}} = dummy;
console.log(dist)

const languages = useLanguage();

const pushArray = ():void => {
    console.log(inputValue)
    languages.setLanguage(inputValue.value)
    inputValue.value ="";
}

const updateInputValue = (event: Event):void =>{
    //NOTE: NULL値の可能性あるためif文作成
    if (!(event.target instanceof HTMLInputElement)) {
        return;
    }
    inputValue.value = event.target.value;
}

</script>

<template>
    <div>
        <div>languageは
        <span v-for="la in languages.languages" :id="la">{{la}}</span>
        です。</div>
        <button @click="pushArray()">配列追加</button>
        <input type="text" :value="inputValue" @input="updateInputValue($event)" class="border-4 border-black">
    </div>
</template>