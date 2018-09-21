<template>
    <div>
        <Row>
            <Col span="4">
                <sysadd></sysadd>
            </Col>
            <Col span="12"></Col>
        </Row>

        <br>
        <ugrid :columnsname="columnsname" :columnsdata="columnsdata"></ugrid>
        <upage :total="total"></upage>
    </div>
</template>

<script>
    import ugrid from "@/components/base/Grid.vue";
    import upage from "@/components/base/Page.vue";
    import sysadd from "./Sysadd.vue";

    export default {
        components: {
            ugrid:ugrid,
            upage:upage,
            sysadd:sysadd
        },
        methods: {
            sysadd() {
                var _this = this;
                console.log();
                this.$axios.get("getUserList",null).then(function (res) {
                    //成功之后处理逻辑
                    console.log(res)
                },function (res) {
                    _this.$Message.error('Fail!');
                    //失败之后处理逻辑
                    console.log("error:"+res)
                })
            }
        },
        data() {
            return {
                value3: false,
                columnsname: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columnsdata: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                total: 1000
            }
        }
    }
</script>
