<template id="layout">
<!--
    <div>
        <div>
                <router-link to="/home/login">/home/login</router-link>
                <router-link to="/home/index">/home/index</router-link>
        </div>
        <router-view></router-view>
    </div>
 -->   
        <Layout>
                <layout-header @navselect="navselect"></layout-header>
                <Content :style="{padding: '0 50px'}">
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="min-height: 300px;">
                            <router-view></router-view>
                        </div>
                    </Card>
                </Content>
                <layout-footer></layout-footer>
        </Layout>
</template>

<script>

    import header from "@/components/layout/Header.vue";
    import footer from "@/components/layout/Footer.vue";
    import Index from "@/views/home/Index.vue";

    export default {
        // name:"layout",
        data() {
            return {

            }
        },
        components: {
            'layout-header':header,
            'layout-footer':footer
        },
        methods: {
            navselect(item) {
                console.log("layout:" + item);
                this.$router.push({
                    path: item
                    // name:item
                })
            }
        }
        // ,
        // watch: {
        //    '$route' (to, from) {
        //        console.log(to);
        //        console.log(from);
        //    }
        // }
    }
    
</script>