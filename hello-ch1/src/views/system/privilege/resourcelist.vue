<template>
    <div>
        <br>
        <ugrid :columnsname="columnsname" :columnsdata="columnsdata"></ugrid>
        <upage :total="total"></upage>
    </div>
</template>

<script>
    import ugrid from "@/components/base/Grid.vue";
    import upage from "@/components/base/Page.vue";

    export default {
        components: {
            ugrid:ugrid,
            upage:upage
        },
        data() {
            return {
                value3: false,
                columnsname: [
                    {
                        title: '资源编码',
                        key: 'code'
                    },
                    {
                        title: '描述',
                        key: 'desc'
                    }
                ],
                columnsdata: [
                    {
                        code: 'Function',
                        desc: 'safslfjlsa'
                    }
                ],
                total: 10
            }
        }
    }
</script>
