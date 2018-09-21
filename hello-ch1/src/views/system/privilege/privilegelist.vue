<template>
    <div>
        <Row>
            <Col span="4">
                <add></add>
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
    import add from "./privilegeadd.vue";

    export default {
        components: {
            ugrid:ugrid,
            upage:upage,
            add:add
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
                        title: '所属项目',
                        key: 'applicationCode'
                    },
                    {
                        title: '资源编码',
                        key: 'resourceCode'
                    },
                    {
                        title: '资源',
                        key: 'resource'
                    },
                    {
                        title: '描述',
                        key: 'desc'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑')
                            ]);
                        }
                    }
                ],
                columnsdata: [
                    {
                        applicationCode: 'pcenter',
                        resourceCode: 'function',
                        resource: 'personal',
                        desc: '可见范围'
                    }
                ],
                total: 1000
            }
        }
    }
</script>
