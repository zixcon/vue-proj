<template>
    <div>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <Col span="4" >
                姓名:
            </Col>
            <Col span="4" pull="1">
                <Input v-model="value14" placeholder="输入..." clearable style="width: 200px" />
            </Col>
            <Col span="4" >
                编号:
            </Col>
            <Col span="4" pull="1">
                <Input v-model="value14" placeholder="输入..." clearable style="width: 200px" />
            </Col>
            <Col span="8">
                <Button icon="ios-search">Search</Button>
            </Col>
        </Row>
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
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
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
