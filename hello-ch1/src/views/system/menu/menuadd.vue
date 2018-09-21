<template>
    <div>
        <Drawer
            title="添加"
            v-model="show"
            width="520"
            :mask-closable="false"
            :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="节点名称" label-position="top">
                            <Input v-model="formData.name" placeholder="节点名称">
                            </Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="节点编码" label-position="top">
                            <Input v-model="formData.code" placeholder="节点编码">
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="叶子节点" label-position="top">
                            <Select v-model="formData.leaf" placeholder="叶子节点">
                                    <Option value="0">否</Option>
                                    <Option value="1">是</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="状态" label-position="top">
                            <Select v-model="formData.status" placeholder="状态">
                                <Option value="0">禁用</Option>
                                <Option value="1">开启</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="权限控制" label-position="top">
                            <Select v-model="formData.control" placeholder="权限控制">
                                    <Option value="0">否</Option>
                                    <Option value="1">是</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="序号" label-position="top">
                            <Input v-model="formData.sort" placeholder="序号">
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="描述" label-position="top">
                            <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="描述..." />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="Cancel">取消</Button>
                <Button type="primary" @click="Submit">提交</Button>
            </div>
        </Drawer>    
    </div>
</template>
<script>
    // import Vuex from 'vuex'
    // const store = new Vuex.Store({
    //     state: {
    //         formData
    //     },
    //     mutations: {
    //         Submit(state,) {
    //             this.$emit('update:Submit', this.formData);
    //             console.log(this.formData);
    //         }
    //     }
    // });
    export default {
        
        model: {    
            // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'show',
            event: 'change'
        },
        // model: {    
        //     // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
        //     prop: 'formData',
        //     event: 'onSubmit'
        // },
        props: {
            // formData:Object,
            show:Boolean
        },
        data () {
            return {
                // prop代表父组件向子组件发送的数据，是不能在子组件的data中重复定义的
                // show: false,
                // 定义中间变量
                // showbox:this.show,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    code: '',
                    name: '',
                    leaf: '',
                    status: '',
                    control: '',
                    sort: '',
                    desc: ''
                },
            }
        },
        methods: {
            Cancel() {
                this.$emit('change', false);
            },
            Submit() {
                // 父节点打开后，无法重新打开 
                // Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。
                // 问题：Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.
                // 使用$emit通知父组件来操作，问题解决！
                // this.show=false;
                this.$emit('onSubmit', this.formData);
                // console.log(this.formData);
                this.$emit('change', false);
            }
        }
        // ,
        // mounted() {
        //     console.log(this.formData);
        //     this.$emit('update:treenode', this.formData);
        // }
        // ,
        // watch: {
        //     Submit() {
        //         console.log('son ' + this);
        //         this.$emit('treenode', this);
        //     }
        // }
    }
</script>
<style>
    .demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
</style>
