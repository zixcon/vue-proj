<template>
    <Table stripe :columns="columnsname" :data="columnsdata"></Table>
</template>
<script>
    export default {
        props: ['columnsname','columnsdata']
    }
</script>
