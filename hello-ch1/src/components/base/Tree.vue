<template>
    <Tree :data="data" :render="renderContent" show-checkbox multiple></Tree>
</template>
<script>
    export default {
        props: ['data','renderContent']
    }
</script>