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
    import add from "./roleadd.vue";

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
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '应用名称',
                        key: 'applicationName'
                    },
                    {
                        title: '角色编码',
                        key: 'code'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '角色描述',
                        key: 'desc'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 250,
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
                                }, '映射菜单'),
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
                                }, '映射权限'),
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
                                }, '编辑'),
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
                                }, '删除')
                            ]);
                        }
                    }
                ],
                columnsdata: [
                    {
                        applicationName: 'John Brown',
                        code: 1,
                        status: 'New York No. 1 Lake Park',
                        desc: '2016-10-03'
                    }
                ],
                total: 1000
            }
        }
    }
</script>
