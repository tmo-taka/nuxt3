<script setup lang="ts">
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

const {obj:{dist=500}} = dummy;
console.log(dist)

const languages = useLanguage();

</script>

<template>
    <div>languageは
    <span v-for="la in languages.languages" :id="la">{{la}}</span>
    です。</div>
</template>