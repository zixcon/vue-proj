<template id="header">
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
                        <MenuItem name="menu">
                            <Icon type="ios-analytics"></Icon>
                            菜单管理
                        </MenuItem>
                        <MenuItem name="privilege">
                            <Icon type="ios-paper"></Icon>
                            权限管理
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
                <!--
                 <div>
                    <router-view></router-view>
                </div>
                -->
</template>
<script>
export default {
  props: {
      
  },
  methods: {
    navselect(name) {
        // console.log("header:navselect:" + name)
        // this.$emit('navselect',name);
        this.$router.push({name:name});
    }
  }
}
</script>