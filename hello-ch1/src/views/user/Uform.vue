<template>
    <Form ref="user" :model="formLeft" label-position="left" :label-width="80">
        <Row type="flex" justify="middle" align="middle" class="code-row-bg">
        <Col span="8" push="1">
        <FormItem label="用户名" prop="name">
            <Input type="text" v-model="user.name"></Input>
        </FormItem>
        </Col>
        <Col span="8" push="1">
        <FormItem label="用户编号" prop="identity">
            <Input type="text" v-model="user.identity"></Input>
        </FormItem>
        </Col>
        <Col span="4" pull="1">
        <FormItem>
            <Button type="default" @click="handleSearch('user')">Search</Button>
        </FormItem>
        </Col>
        </Row>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                user: {
                    name: '',
                    identity: ''
                }
            }
        },
        methods: {
            handleSearch (name) {
                // this.$refs[name].validate((valid) => {
                //    if (valid) {
                //        this.$Message.success('Success!');
                //    } else {
                //        this.$Message.error('Fail!');
                //    }
                // });
                this.$emit('handleSearch',this.user);
            }
        }
    }
</script>