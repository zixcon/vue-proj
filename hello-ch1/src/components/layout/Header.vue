<template id="header">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="login" @on-select="navselect">
                    <div class="layout-logo"></div>
                    <div class="layout-nav" >
                        <MenuItem name="index">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="login">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
</template>
<script>
export default {
  props: {
      
  },
  methods: {
    navselect(name) {
        console.log("header:navselect:" + name)
        this.$emit('nav-select',name);
    }
  }
}
</script>