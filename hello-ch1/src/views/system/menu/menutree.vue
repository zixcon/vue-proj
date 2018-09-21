<template>
    <div>
        
        <Row>
            <tree-show v-model="show" @onSubmit="onSubmit"></tree-show>
        </Row>
       
        <br>
        <Row>
            <Col span="10">
                <Card>
                    <tree :data="treedata" :renderContent="renderContent"></tree>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import tree from "@/components/base/Tree.vue";
    import menuadd from "./menuadd.vue";

    export default {
        components: {
            treeShow:menuadd,
            tree:tree
        },
        methods: {
            
            onSubmit(data){
                console.log('parent');
                console.log(data);
                // this.show=false;
                // console.log(this.show);
            },
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
        watch: {
            // 因为不能直接修改 props 里的属性，所以不能直接把 formData 通过v-model进行绑定
            // 在这里我们需要监听 formData，当它发生变化时，立即将值赋给 data 里的 form
            Submit: {
                immediate: true,
                handler (val) {
                    console.log(val);
                }
            }
        },
        data () {
            return {
                show: false,
                treedata: [
                    {
                        title: '顶级节点',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-add',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '64px'
                                        },
                                        on: {
                                            click: () => { 
                                                this.show = true; 
                                                // this.append(data) 
                                            }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'default',
                    size: 'small',
                }
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-add'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => {
                                    this.show = true; 
                                    // this.append(data) 
                                }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-remove'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    }
</script>
