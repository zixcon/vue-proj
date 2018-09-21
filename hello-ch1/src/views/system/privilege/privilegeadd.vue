<template>
    <div>
        <Button @click="value3 = true" type="default">添加</Button>
        <Drawer
            title="添加权限"
            v-model="value3"
            width="520"
            :mask-closable="false"
            :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="12">
                        <Select v-model="formData.application" placeholder="应用名称">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                        </Select>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="角色名称" label-position="top">
                            <Input v-model="formData.roleName" placeholder="角色名称">
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="状态" label-position="top">
                            <Select v-model="formData.status" placeholder="状态">
                                <Option value="private">禁用</Option>
                                <Option value="public">开启</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="角色描述" label-position="top">
                            <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="描述..." />
                        </FormItem>
                    </Col>
                </Row>
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
                    application: '',
                    roleName: '',
                    status: '',
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
