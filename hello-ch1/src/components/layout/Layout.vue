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
                <Header>
                <Menu mode="horizontal" theme="dark" active-name="home" @on-select="navselect">
                    <div class="layout-logo"></div>
                    <div class="layout-nav" >
                        <MenuItem name="home">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="user">
                            <Icon type="ios-keypad"></Icon>
                            用户管理
                        </MenuItem>
                        <Submenu name="application">
                            <template slot="title">
                                <Icon type="ios-stats" />
                                系统管理
                            </template>
                            <MenuGroup title="系统">
                                <MenuItem name="system">系统</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="RBAC">
                                <MenuItem name="role">角色</MenuItem>
                                <MenuItem name="menu">菜单</MenuItem>
                                <MenuItem name="privilege">权限</MenuItem>
                                <MenuItem name="resource">资源</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <Submenu name="stats">
                            <template slot="title">
                                <Icon type="ios-stats" />
                                统计分析
                            </template>
                            <MenuGroup title="使用">
                                <MenuItem name="3-1">新增和启动</MenuItem>
                                <MenuItem name="3-2">活跃分析</MenuItem>
                                <MenuItem name="3-3">时段分析</MenuItem>
                            </MenuGroup>
                            <MenuGroup title="留存">
                                <MenuItem name="3-4">用户留存</MenuItem>
                                <MenuItem name="3-5">流失用户</MenuItem>
                            </MenuGroup>
                        </Submenu>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="min-height: 400px;">
                            <router-view></router-view>
                        </div>
                    </Card>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>

                <!--
                <layout-header @navselect="navselect"></layout-header>

                <router-view></router-view>
                <router-view name="content"></router-view>
                <router-view name="footer"></router-view>
                
                
                <layout-content></layout-content>
                
                <Content :style="{padding: '0 50px'}">
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="min-height: 400px;">
                            <router-view></router-view>
                        </div>
                    </Card>
                </Content>
                <layout-footer></layout-footer>
                -->
                
        </Layout>
</template>

<script type="text/ecmascript-6">

    // import header from "@/components/layout/Header.vue";
    // import footer from "@/components/layout/Footer.vue";
    // import content from "@/components/layout/Content.vue";
    // import Index from "@/views/home/Index.vue";

    export default {
        // name:"layout",
        data() {
            return {

            }
        },
        // components: {
        //     'layout-header':header,
        //     'layout-footer':footer,
        //     'layout-content':content
        // },
        methods: {
            navselect(item) {
                this.$router.push({name:item});
                console.log("layout:" + item);
                // this.$router.replace({
                // this.$router.go({

                    // path: item
                    // name:item
                // })
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
<style lang="less" scoped rel="stylesheet/less">
    @import "~@/components/theme/layout.less";
</style>
