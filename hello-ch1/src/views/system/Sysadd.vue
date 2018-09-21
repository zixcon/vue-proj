<template>
    <div>
        <Button @click="value3 = true" type="default">添加</Button>
        <Drawer
            title="添加系统"
            v-model="value3"
            width="720"
            :mask-closable="false"
            :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="应用名称" label-position="top">
                            <Input v-model="formData.name" placeholder="系统名称" />
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="系统url地址" label-position="top">
                            <Input v-model="formData.url" placeholder="系统url地址">
                                <span slot="prepend">http://</span>
                                <span slot="append">.com</span>
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="负责人姓名" label-position="top">
                            <Input v-model="formData.owner" placeholder="负责人姓名">
                            </Input>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="系统类型" label-position="top">
                            <Select v-model="formData.type" placeholder="系统类型">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="负责人电话" label-position="top">
                            <Input v-model="formData.phone" placeholder="负责人电话">
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="系统描述" label-position="top">
                    <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="描述..." />
                </FormItem>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="value3 = false">取消</Button>
                <Button type="primary" @click="Submit">提交</Button>
            </div>
        </Drawer>    
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value3: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    owner: '',
                    type: '',
                    approver: '',
                    date: '',
                    desc: ''
                },
            }
        },
        methods: {
            Submit() {
                console.log(this.formData);
                this.value3=false;
            }
        }
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
