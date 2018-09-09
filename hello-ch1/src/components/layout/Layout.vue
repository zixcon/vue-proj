<template id="layout">
    <div id="app-layout">

    <div>
        <div>
                <router-link to="/home/login">/home/login</router-link>
                <router-link to="/home/index">/home/index</router-link>
        </div>
        <router-view></router-view>
    </div>
    </div>
    
                
                <!--
        <Layout>
                <layout-header @nav-select="navselect"></layout-header>
                <Content :style="{padding: '0 50px'}">
                <router-link to="/home/login">/home/login</router-link>
                <router-view></router-view>
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="min-height: 300px;">
                            
                        </div>
                    </Card>
                </Content>
                <layout-footer></layout-footer>
        </Layout>
        -->
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
                    // path: '/home/index'
                    name:item
                })
            }
        },
        watch: {
            '$route' (to, from) {
                console.log(to);
                console.log(from);
            }
        }
    }
    
</script>