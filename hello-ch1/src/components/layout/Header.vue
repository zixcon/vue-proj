<template id="header">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="/home/index" @on-select="navselect">
                    <div class="layout-logo"></div>
                    <div class="layout-nav" >
                        <MenuItem name="/home/index">
                            <Icon type="ios-navigate"></Icon>
                            INDEX
                        </MenuItem>
                        <MenuItem name="/home/login">
                            <Icon type="ios-keypad"></Icon>
                            LOGIN
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
        this.$emit('navselect',name);
    }
  }
}
</script>