<template>
    <Page class="footer" :total="total" size="small" show-elevator show-sizer />
</template>
<script>
    export default {
        props: ['total']
    }
</script>
<style>
.footer{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		text-align: center;
		# background: #000000;
		# color: #FFF000;
		line-height: 50px;
	}

</style>
